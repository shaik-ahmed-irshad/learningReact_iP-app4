import React from "react";
import "./css/Navbar.css";
import logo from "../images/github.svg";
const Navbar = () => {
  return (
    <nav>
      <center>
        <div className="logo">
          <img src={logo} alt="GitHub Logo" />
        </div>
      </center>
      {/* <ul>
        <li>Home</li>
        <li>Contact</li>
      </ul> */}
    </nav>
  );
};

export default Navbar;
