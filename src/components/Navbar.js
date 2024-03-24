import React from "react";
import "./Navbar.css";
import logo from "./github.svg";
const Navbar = () => {
  return (
    <nav>
      <div className="logo">
        <img src={logo} alt="GitHub Logo" />
      </div>
      <ul>
        <li>Home</li>
        <li>Contact</li>
      </ul>
    </nav>
  );
};

export default Navbar;
