import {Link } from 'react-router-dom'
import "./css/Card.css";
import PropTypes from "prop-types";
import Loading from './Loading';
const UserItem = ({ user, loading }) => {
  return (
    <>
      {loading && <Loading />}
      {!loading && (
        <div className={"tpn_card"}>
          <img
            alt="user-img"
            src={user.avatar_url}
            style={{ width: "180px" }}
          />
          <h3>{user.login}</h3>
          {/* <p>Some description.</p> */}
          <Link
            to={`/reactApps/github/user/${user.login}`}
            className="btn tpn_btn"
          >
            Profile
          </Link>
        </div>
      )}
    </>
  );
};

UserItem.propTypes = {
  user: PropTypes.object.isRequired,
};

export default UserItem;
