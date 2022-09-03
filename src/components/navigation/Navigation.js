import "./Navigation.css";
import React from "react";
import NavImg from "../../asset/NavImg.svg";
import { NavLink } from "react-router-dom";
const Navigation = () => {
  return (
    <div className="row navigation_section">
      <div className="col-4">
        <img src={NavImg} alt="QuizzGrad" />
      </div>
      <div className="col-8">
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="login">Login</NavLink>
          </li>
          <li>
            <NavLink to="aboutus">About us</NavLink>
          </li>
          <li>
            <NavLink to="test">Test</NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};
export default Navigation;
