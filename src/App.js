import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Contact from "./components/Contact";
import About from "./components/About";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import User from "./components/User";
import axios from "axios";
import "./App.css";

function App() {
  const [users, setUsers] = useState([]);
  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(true);
  const [alert, setAlert] = useState(null);
  const [repos, setRepos] = useState([]);
  useEffect(() => {
    // Get User Data function with axios api
    const getData = async () => {
      try {
        let { data } = await axios.get("https://api.github.com/users", {
          auth: {
            username: process.env.REACT_APP_NAME,
            password: process.env.REACT_APP_PASS,
          },
        });
        setLoading(false);
        setUsers(data);
      } catch (error) {
        console.error(error);
      }
    };
    getData();
  }, []);

  // Search User API
  const searchUsers = async (username) => {
    setLoading(true);
    let { data } = await axios.get(
      `https://api.github.com/search/users?q=${username}`,
      {
        auth: {
          username: process.env.REACT_APP_NAME,
          password: process.env.REACT_APP_PASS,
        },
      }
    );
    setLoading(false);
    setUsers(data.items);
  };

  // Get single user
  const getUser = async (uname) => {
    try {
      setLoading(true);
      const { data } = await axios.get(
        `https://api.github.com/users/${uname}`,
        {
          auth: {
            username: process.env.REACT_APP_NAME,
            password: process.env.REACT_APP_PASS,
          },
        }
      );
      setLoading(false);
      setUser(data);
    } catch (error) {
      console.error(error);
    }
  };

  // Get user repos
  const getRepos = async (uname) => {
    try {
      setLoading(true);
      const { data } = await axios.get(
        `https://api.github.com/users/${uname}/repos?per_page=5&sort=desc`,
        {
          auth: {
            username: process.env.REACT_APP_NAME,
            password: process.env.REACT_APP_PASS,
          },
        }
      );
      setLoading(false);
      setRepos(data);
    } catch (error) {
      console.error(error);
    }
  };

  // Clear Users function
  const clearUser = () => {
    setUsers([]);
    // setAlert(null)
  };

  //Show Alert
  const showAlert = (alert) => {
    setAlert(alert);
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  return (
    <>
      <>
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={
              <Home
                alert={alert}
                users={users}
                loading={loading}
                showAlert={showAlert}
                clearUsers={clearUser}
                searchUsers={searchUsers}
              />
            }
          />

          <Route path="/contact" element={<Contact loading={loading} />} />
          <Route path="/about" element={<About />} />
          <Route
            path="/user/:uname"
            element={
              <User
                getUser={getUser}
                user={user}
                getRepos={getRepos}
                repos={repos}
                loading={loading}
              />
            }
          />
        </Routes>
        <Footer />
      </>
    </>
  );
}

export default App;
