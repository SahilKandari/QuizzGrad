import "./App.css";
import Navigation from "./components/navigation/Navigation";
import Test from "./components/test/Test";
import { useEffect, useState } from "react";
import { backend_api_url } from "./backend";
import axios from "axios";
import { useSelector } from "react-redux";
import Home from "./components/home/Home";
import { Route, Routes } from "react-router-dom";
import React from "react";
function App() {
  const [questionsData, setQuestionsData] = useState([]);
  const nextQuestion = useSelector((state) => state.test.questionNumber);
  const total = useSelector((state) => state.test.totalQuestion);

  useEffect(() => {
    axios
      .get(`${backend_api_url}${total}`)
      .then((res) => {
        setQuestionsData(res.data.results);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, [total]);

  questionsData?.forEach((e, i) => (e.id = i + 1));

  return (
    <div className="fluid-container">
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />

        <Route
          path="test"
          element={
            <Test
              key={questionsData[nextQuestion]?.id}
              question={questionsData[nextQuestion]?.question}
              correctAnswer={questionsData[nextQuestion]?.correct_answer}
              incorrectAnswer={questionsData[nextQuestion]?.incorrect_answers}
            />
          }
        />
      </Routes>
    </div>
  );
}

export default App;
