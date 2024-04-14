import { useReducer } from "react";
import GithubContext from "./githubContext.js";
import GithubReducer from "./githubReducer.js";
import axios from "axios";
import {
  SET_USERS,
  SET_USER,
  SHOW_ALERT,
  SET_REPOS,
  SET_LOADING,
} from "../types.js";

function GitHubState(props) {
  const initialState = {
    users: [],
    user: {},
    repos: [],
    alert: null,
    loading: true,
  };

  const [state, dispatch] = useReducer(GithubReducer, initialState);

  const setLoading = () => {
    dispatch({
      type: SET_LOADING,
    });
  };

  // Get User Data function with axios api
  const AllUsers = async () => {
    try {
      setLoading();
      let { data } = await axios.get("https://api.github.com/users", {
        auth: {
          username: process.env.REACT_APP_NAME,
          password: process.env.REACT_APP_PASS,
        },
      });
      dispatch({
        type: SET_USERS,
        payload: data,
      });
    } catch (error) {
      dispatch({ type: SHOW_ALERT });
      console.error(error);
    }
  };

  // Search User API
  const searchUsers = async (username) => {
    dispatch({
      type: SET_USERS,
      payload: [],
    });
    setLoading(); 
    let { data } = await axios.get(
      `https://api.github.com/search/users?q=${username}`,
      {
        auth: {
          username: process.env.REACT_APP_NAME,
          password: process.env.REACT_APP_PASS,
        },
      }
    );
    dispatch({
      type: SET_USERS,
      payload: data.items,
    });
  };

  // Get single user
  const getUser = async (uname) => {
    try {
      setLoading();
      const { data } = await axios.get(
        `https://api.github.com/users/${uname}`,
        {
          auth: {
            username: process.env.REACT_APP_NAME,
            password: process.env.REACT_APP_PASS,
          },
        }
      );
      dispatch({
        type: SET_USER,
        payload: data,
      });
    } catch (error) {
      console.error(error);
    }
  };

  // Get user repos
  const getRepos = async (uname) => {
    try {
      setLoading();
      const { data } = await axios.get(
        `https://api.github.com/users/${uname}/repos?per_page=5&sort=desc`,
        {
          auth: {
            username: process.env.REACT_APP_NAME,
            password: process.env.REACT_APP_PASS,
          },
        }
      );
      dispatch({
        type: SET_REPOS,
        payload: data,
      });
    } catch (error) {
      console.error(error);
    }
  };

  // Clear Users function
  const clearUsers = () => {
    try {
      dispatch({
        type: SET_USERS,
        payload: [],
      });
    } catch (error) {
      console.log(error);
    }
    dispatch({ type: SHOW_ALERT, payload: null });
  };

  //Show Alert
  const showAlert = (alert) => {
    dispatch({ type: SHOW_ALERT, payload: alert });
    setTimeout(() => {
      dispatch({ type: SHOW_ALERT, payload: null });
    }, 2500);
  };

  return (
    <GithubContext.Provider
      value={{
        users: state.users,
        user: state.user,
        repos: state.repos,
        alert: state.alert,
        loading: state.loading,
        searchUsers,
        getUser,
        getRepos,
        showAlert,
        clearUsers,
        AllUsers,
      }}
    >
      {props.children}
    </GithubContext.Provider>
  );
}

export default GitHubState;
