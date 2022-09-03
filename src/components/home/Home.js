import "./Home.css";
import HomeImg from "../../asset/HomeImg.svg";
import React from "react";
const Home = () => {
  return (
    <div className="row home_section">
      <img src={HomeImg} alt="QuizzGrad" />
    </div>
  );
};
export default Home;
