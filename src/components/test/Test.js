import { useState } from "react";
import "./Test.css";
import { useDispatch, useSelector } from "react-redux";
import { testActions } from "../../store/test-slice";
import { CorrectModal, SubmitModal, WrongModal } from "../modals/Modals";
import { modalActions } from "../../store/modal-slice";
import React from "react";
const Test = (props) => {
  const [selectedAns, setSelectedAns] = useState("");
  const dispatch = useDispatch();
  const show = useSelector((state) => state.test.questionNumber);
  const total = useSelector((state) => state.test.totalQuestion);
  const correctModal = useSelector((state) => state.modal.correctModal);
  const wrongModal = useSelector((state) => state.modal.wrongModal);
  const submitModal = useSelector((state) => state.modal.submitModal);
  const { question, correctAnswer, incorrectAnswer } = props;

  console.log(correctAnswer, "correctAnswer");

  //making one array of all answers
  incorrectAnswer?.push(correctAnswer);

  //removing duplicates on every render
  let allAnswers = [...new Set(incorrectAnswer)];

  //Shuffling array randomly
  allAnswers.sort(() => (Math.random() > 0.5 ? 1 : -1));

  const nextHandler = () => {
    if (selectedAns === correctAnswer) {
      dispatch(modalActions.correct());
      dispatch(testActions.nextQuestion(true));
    }
    if (selectedAns !== correctAnswer) {
      if (selectedAns.length === 0) {
        alert("Please Select an answer first");
      } else {
        dispatch(modalActions.wrong());
        dispatch(testActions.nextQuestion(false));
      }
    }
  };

  const preevHandler = () => {
    dispatch(testActions.previousQuestion());
  };

  const testSubmitHandler = () => {
    if (selectedAns === correctAnswer) {
      dispatch(testActions.submitAnswers(true));
    } else {
      dispatch(testActions.submitAnswers(false));
    }
    dispatch(modalActions.submit());
  };

  const getSelectedAnswerStyle = (ans) => {
    if (selectedAns === ans) {
      return {
        background: "#FCC822",
      };
    }
    return {};
  };

  return (
    <div className="row test_section">
      <div className="col-12 test_question">
        <h2>{question}</h2>
      </div>
      <div className="row test_answers">
        <ul>
          {allAnswers?.map((ans, index) => {
            return (
              <li key={index}>
                <input
                  onClick={(e) => setSelectedAns(e.target.value)}
                  type="radio"
                  value={ans}
                  id={ans}
                />
                <label htmlFor={ans} style={getSelectedAnswerStyle(ans)}>
                  {ans}
                </label>
              </li>
            );
          })}
        </ul>
      </div>
      <div className="row test_buttons">
        <div className="col-4 text-center">
          {show > 0 && (
            <button onClick={preevHandler} className="btn previous_button">
              {" "}
              <i className="fa-solid fa-arrow-left"></i> Previous{" "}
            </button>
          )}
        </div>
        <div className="col-4 text-center">
          {show < total - 1 && (
            <button onClick={nextHandler} className="btn next_button ">
              Next <i className="fa-solid fa-arrow-right"></i>
            </button>
          )}
          {show === total - 1 && (
            <button onClick={testSubmitHandler} className="btn next_button">
              Submit
            </button>
          )}
          {correctModal && <CorrectModal />}
          {wrongModal && <WrongModal />}
          {submitModal && <SubmitModal />}
        </div>
      </div>
    </div>
  );
};
export default Test;
