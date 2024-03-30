import { Link } from "react-router-dom";
import logo from "../images/72.png";
import "./css/Nav.css";

const Navbar = () => {
  return (
    <div className="nav">
      <input type="checkbox" id="nav-check" />
      <div className="nav-header">
        <div className="nav-title">
          <Link to={"/reactApps/github"}>
            <img src={logo} alt="72's Logo" />
          </Link>
        </div>
      </div>

      <div className="nav-links">
        <Link to={"reactApps/github/"}>Home</Link>
        <a
          href={"https://github.com/shaik-ahmed-irshad"}
          target="_blank"
          rel="noreferrer"
        >
          Github
        </a>
        <a
          href={"https://www.linkedin.com/in/edventurous-ahmed/"}
          target="_blank"
          rel="noreferrer"
        >
          LinkedIn
        </a>
        <a
          href={"mailto:ahmed.code.ai@gmail.com"}
          target="_blank"
          rel="noreferrer"
        >
          Mail
        </a>
        <Link to={"reactApps/github/about"}>About</Link>
        <Link to={"reactApps/github/contact"}>Contact</Link>
      </div>
    </div>
  );
};

export default Navbar;
