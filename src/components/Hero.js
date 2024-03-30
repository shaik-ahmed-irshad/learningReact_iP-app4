import React from "react";
import "./css/Hero.css";
import logo from "../images/github.svg";
const Hero = () => {
  return (
    <nav>
      <center>
        <div className="logo">
          <a href="/">
            <img src={logo} alt="GitHub Logo" />
          </a>
        </div>
      </center>
      
    </nav>
  );
};

export default Hero;

  /* <ul>
        <li>Home</li>
        <li>Contact</li>
      </ul> */
