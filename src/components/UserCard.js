import UserItem from "./UserItem";
import "./css/Card.css";

const UserCard = ({users}) => {

  return (
    <>
      <div className="main-div">
        {users.map((user, i) => <UserItem key={i} user={user} />)}
      </div>
    </>
  );
};

export default UserCard;
