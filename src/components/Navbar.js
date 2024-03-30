import { Link } from "react-router-dom";
import logo from "../images/72.png";
import "./css/Nav.css";

const Navbar = () => {
  return (
    <div className="nav">
      <input type="checkbox" id="nav-check" />
      <div className="nav-header">
        <div className="nav-title">
          <Link to={"/"}>
            <img src={logo} alt="72's Logo" />
          </Link>
        </div>
      </div>

      <div className="nav-links">
        <Link to={"https://github.com/shaik-ahmed-irshad"}>Github</Link>
        <Link>Mail</Link>
        <Link>LinkedIn</Link>
        <Link to={"/about"}>About</Link>
        <Link to={"/contact"}>Contact</Link>
      </div>
    </div>
  );
};

export default Navbar;
