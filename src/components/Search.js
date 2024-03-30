import { useState } from "react";
import "./css/Search.css";
import Alert from "./Alert";

const Search = ({ searchUsers, clearUsers, showAlert, alert }) => {
  const [username, setUsername] = useState("");
  const onChangeHandler = (e) => {
    setUsername(e.target.value);
  };

  const onSubmitHandler = (e) => {

    e.preventDefault();
    if (username === "") {
      showAlert({ msg: "UserName cannot be empty" });
    } else {
      searchUsers(username);
      setUsername("");
    }
  };
  return (
    <>
      <center className="search-form">
        <Alert alert={alert} />
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
          <button className="clear-btn" onClick={clearUsers}>
            Clear Users
          </button>
        </form>
      </center>
    </>
  );
};

export default Search;

/*
Handeling Forms in React.
1. Form data must be stored in State Variable
*/
