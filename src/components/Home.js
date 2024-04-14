import { useContext } from "react";
import Search from "./Search";
import Loading from "./Loading";
import UserCard from "./UserCard";
import Hero from "./Hero";
import GithubContext from "../contexts/GitHub/githubContext";

const Home = () => {
  const githubContext = useContext(GithubContext);

  return (
    <>
      <div className="container" style={{ minHeight: "80vh" }}>
        <Hero />
        <Search />
        {githubContext.loading && <Loading />}
        {!githubContext.loading && <UserCard />}
      </div>
    </>
  );
};

export default Home;
