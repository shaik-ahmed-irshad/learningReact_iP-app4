import { useEffect, useContext } from "react";
import { Routes, Route } from "react-router-dom";
import Contact from "./components/Contact";
import About from "./components/About";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import User from "./components/User";
import "./App.css";
import GithubContext from "./contexts/GitHub/githubContext";

function App() {
  const githubContext = useContext(GithubContext);
  
  useEffect(() => {
    githubContext.AllUsers();
    // eslint-disable-next-line
  }, []);

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="reactApps/github/" element={<Home />} />
        <Route path="reactApps/github/contact" element={<Contact />} />
        <Route path="reactApps/github/about" element={<About />} />
        <Route path="reactApps/github/user/:uname" element={<User />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
