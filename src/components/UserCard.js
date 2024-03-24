import { useState, useEffect } from "react";
import UserItem from "./UserItem";
import React from "react";
import axios from "axios";
import "./Card.css";
import Loading from "./Loading";

const UserCard = () => {
  const [userData, setUserData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getData = async () => {
      try {
        setLoading(true);
        let { data } = await axios.get("https://api.github.com/users");
        setLoading(false);
        setUserData(data);
      } catch (error) {
        console.error(error);
      }
    };
    getData();
  }, []);

  return (
    <>
      <div className="main-div">
        {loading && <Loading />}
        {userData.map((users, i) => (
          <UserItem key={i} user={users} />
        ))}
      </div>
    </>
  );
};

export default UserCard;
