import { useParams } from "react-router-dom";
import { useEffect, useContext } from "react";
import "./css/Card.css";
import Loading from "./Loading";
import GithubContext from "../contexts/GitHub/githubContext";

const User = () => {
  const { uname } = useParams();
  const githubContext = useContext(GithubContext);

  useEffect(() => {
    githubContext.getUser(uname);
    githubContext.getRepos(uname);
    // eslint-disable-next-line
  }, []);
  return (
    <>
      {githubContext.loading && <Loading />}
      {!githubContext.loading && (
        <div className={"  flex-container"}>
          <input id="slider" className="customSlider" type="checkbox" />
          <label htmlFor="slider"></label>
          <div className="wrapper">
            {/* <div className="top-icons">
                <i className="fas fa-long-arrow-alt-left"></i>
                <i className="fas fa-ellipsis-v"></i>
                <i className="far fa-heart"></i>
                </div>  */}
            {/* -------------------------------------- */}
            <div className="profile">
              <img
                src={githubContext.user.avatar_url}
                className="thumbnail"
                alt="DP"
              />
              <h3 className="name">{githubContext.user.name}</h3>
              {githubContext.user.bio && (
                <p className="title">{githubContext.user.bio}</p>
              )}
              {/* <p className="description">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque
                aliquam aliquid porro!
              </p> */}
              {/* <button type="button" className="btn">
                Hire Me
              </button> */}
            </div>

            <div className="social-icons">
              {githubContext.user.twitter_username && (
                <div className="icon">
                  <a
                    href={`https://twitter.com/${githubContext.user.twitter_username}`}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <i className="fab fa-twitter"></i>
                  </a>
                  <p>{githubContext.user.twitter_username}</p>
                </div>
              )}

              {githubContext.user.location && (
                <div className="icon">
                  <a href=" ">
                    <i className="fa-solid fa-location-dot"></i>
                  </a>
                  <p>{githubContext.user.location}</p>
                </div>
              )}

              {githubContext.user.blog && (
                <div className="icon">
                  <a
                    href={`${githubContext.user.blog}`}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <i className="fa-solid fa-globe"></i>
                  </a>
                  <p>{githubContext.user.blog}</p>
                </div>
              )}
            </div>

            <div className="social-icons">
              <div className="icon">
                <a href=" ">
                  <i className="fa-solid fa-user"></i>
                </a>
                <h4>{githubContext.user.following}</h4>
                <p>Following</p>
              </div>

              <div className="icon">
                <a href=" ">
                  <i className="fa-solid fa-users"></i>
                </a>
                <h4>{githubContext.user.followers}</h4>
                <p>Followers</p>
              </div>

              <div className="icon">
                <a href=" ">
                  <i className="fa-solid fa-flag"></i>
                </a>
                <h4>{githubContext.user.public_repos}</h4>
                <p>Public Reops</p>
              </div>
              <div className="icon">
                <a href=" ">
                  <i className="fa-solid fa-flag"></i>
                </a>
                <h4>{githubContext.user.public_gists}</h4>
                <p>Public Gists</p>
              </div>
            </div>
          </div>

          {/* -------------------------------------- */}

          <div className="user-details_card wrapper">
            <h2>Top 5 Repositories:</h2>
            {githubContext.repos.map((repo, i) => (
              <div key={repo.id}>
                <h3>
                  {i + 1}. {repo.name}
                </h3>
                <p>
                  {repo.description}
                  <span className="a-link">
                    <a href={repo.html_url} target="_blanck" rel="noreferrer">
                      Click Me To Visit
                    </a>
                  </span>
                </p>
              </div>
            ))}
            <br />
            <button type="button" className="btn visit-btn">
              <a
                href={githubContext.user.html_url}
                target="_blank"
                rel="noreferrer"
              >
                Visit GiHhub
              </a>
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default User;
