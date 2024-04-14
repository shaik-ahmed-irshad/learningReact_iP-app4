import { useState, useContext } from "react";
import "./css/Search.css";
import GithubContext from "../contexts/GitHub/githubContext";
import Alert from "./Alert";

const Search = () => {

  const githubContext = useContext(GithubContext);

  const [username, setUsername] = useState("");

  const onChangeHandler = (e) => {
    setUsername(e.target.value);
  };

  const onSubmitHandler = (e) => {

    e.preventDefault();
    if (username === "") {
      // window.alert('username cannot be empty')
      githubContext.showAlert({ msg: "UserName cannot be empty" });
    } else {
      githubContext.searchUsers(username);
      setUsername("");
    }
  };
  return (
    <>
      <center className="search-form">
        <Alert alert={githubContext.alert} />
        <form onSubmit={onSubmitHandler}>
          <input
            type="text"
            name="fname"
            placeholder="Search Your GitHub user here .."
            onChange={onChangeHandler}
            value={username}
            autoComplete="off"
          />
          <input type="submit" value={"Search User"} />
        </form>
          <button className="clear-btn" onClick={githubContext.clearUsers}>
            Clear Users
          </button>
      </center>
    </>
  );
};

export default Search;

/*
Handeling Forms in React.
1. Form data must be stored in State Variable
*/
