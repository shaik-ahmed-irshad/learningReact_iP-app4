import { useState, useEffect } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Search from "./components/Search";
import Card from "./components/UserCard";
import axios from "axios";
// import {Pass, Name} from '../.env.production.local'

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const getData = async () => {
      try {
        let { data } = await axios.get("https://api.github.com/users", {
          auth: {
            username: process.env.REACT_APP_NAME,
            password: process.env.REACT_APP_PASS,
          },
        });
        setUsers(data);
      } catch (error) {
        console.error(error);
      }
    };
    getData();
  }, []);

  const searchUsers = async (username) => {
    let { data } = await axios.get(
      `https://api.github.com/search/users?q=${username}`
    );
    setUsers(data.items);
  };
  return (
    <>
      <Navbar />
      <div className="container">
        <Search searchUsers={searchUsers} />
        <Card users={users} />
      </div>
    </>
  );
}

export default App;
