import React from "react";
import "./css/Card.css";
import PropTypes from "prop-types";


const UserItem = ({ user }) => {
  return (
    <div className={"tpn_card"}>
      <img
        alt="user-img"
        src={user.avatar_url}
        style={{ width: "180px" }}
      />
      <h3>{user.login}</h3>
      {/* <p>Some description.</p> */}
      <a href={user.html_url} className="btn tpn_btn">
        Git Profile
      </a>
    </div>
  );
};

UserItem.propTypes = {
  user: PropTypes.object.isRequired,
};


export default UserItem;
