import { useState } from "react";
import "./css/Search.css";
import PropTypes from "prop-types";

const Search = ({searchUsers}) => {
  const [username, setUsername] = useState("");
  const onChangeHandler = (e) => {
      setUsername(e.target.value);
  }

  const onSubmitHandler =  (e) => {
    e.preventDefault();
    searchUsers(username);
  }
  return (
    <>
      <center>
        <form onSubmit={onSubmitHandler}>
          <input
            type="text"
            name="fname"
            placeholder="Search Your GitHub user here .."
            onChange={onChangeHandler}
          />
          <input type="submit" value={"Search User"} />
        </form>
      </center>
    </>
  );
};

Search.propTypes = {
  username: PropTypes.string.isRequired,
  searchUsers: PropTypes.func.isRequired,
};


export default Search;

/*
Handeling Forms in React.
1. Form data must be stored in State Variable
*/
