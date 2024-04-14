import { useContext } from "react";
import UserItem from "./UserItem";
import "./css/Card.css";
import GithubContext from "../contexts/GitHub/githubContext";


const UserCard = () => {
  const githubContext = useContext(GithubContext);

  return (
    <>
      <div className="main-div">
        {githubContext.users.map((user, i) => <UserItem key={i} user={user} />)}
      </div>
    </>
  );
};

export default UserCard;
