import UserItem from "./UserItem";
import "./css/Card.css";


const UserCard = ({users, loading}) => {

  return (
    <>
      <div className="main-div">
        {users.map((user, i) => <UserItem key={i} user={user} loading={loading}/>)}
      </div>
    </>
  );
};

export default UserCard;
