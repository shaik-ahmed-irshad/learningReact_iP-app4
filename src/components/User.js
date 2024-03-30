import { useParams } from "react-router-dom";
import { useEffect } from "react";
import "./css/Card.css";
import Loading from "./Loading";
const User = ({ getUser, user, getRepos, repos, loading }) => {
  const { uname } = useParams();
  useEffect(() => {
    getUser(uname);
    getRepos(uname);
  }, []);
  console.log(user, "--------olalalaaa-------", repos);
  return (
    <>
      {loading && <Loading />}
      {!loading && (
        <div className={" tpn_card-user flex-container"}>
          <div className="wrapper">
            {/* <div className="top-icons">
                <i className="fas fa-long-arrow-alt-left"></i>
                <i className="fas fa-ellipsis-v"></i>
                <i className="far fa-heart"></i>
                </div>  */}
            {/* -------------------------------------- */}
            <div className="profile">
              <img src={user.avatar_url} className="thumbnail" alt="DP" />
              <h3 className="name">{user.name}</h3>
              {user.bio && <p className="title">{user.bio}</p>}
              {/* <p className="description">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque
                aliquam aliquid porro!
              </p> */}
              {/* <button type="button" className="btn">
                Hire Me
              </button> */}
            </div>

            <div className="social-icons">
              {user.twitter_url_username && (
                <div className="icon">
                  <a
                    href={`https://twitter.com/${user.twitter_url_username}`}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <i className="fab fa-twitter"></i>
                    {user.twitter_url_username}
                  </a>
                  <p>Twitter</p>
                </div>
              )}

              {user.location && (
                <div className="icon">
                  <a href="/" target="_blank" rel="noreferrer">
                    <i className="fa-solid fa-location-dot"></i>
                  </a>
                  <p>{user.location}</p>
                </div>
              )}

              {user.blog && (
                <div className="icon">
                  <a href={`${user.blog}`} target="_blank" rel="noreferrer">
                    <i className="fa-solid fa-globe"></i>
                  </a>
                  <p>{user.blog}</p>
                </div>
              )}
            </div>

            <div className="social-icons">
              <div className="icon">
                <a href="/" rel='noreferrer'>
                  <i className="fa-solid fa-user"></i>
                </a>
                <h4>{user.following}</h4>
                <p>Following</p>
              </div>

              <div className="icon">
                <a href="/" rel='noreferrer'>
                  <i className="fa-solid fa-users"></i>
                </a>
                <h4>{user.followers}</h4>
                <p>Followers</p>
              </div>

              <div className="icon">
                <a href="/" rel='noreferrer'>
                  <i className="fa-solid fa-flag"></i>
                </a>
                <h4>{user.public_repos}</h4>
                <p>Public Reops</p>
              </div>
              <div className="icon">
                <a href="/" rel='noreferrer'>
                  <i className="fa-solid fa-flag"></i>
                </a>
                <h4>{user.public_gists}</h4>
                <p>Public Gists</p>
              </div>
            </div>
          </div>

          {/* -------------------------------------- */}

          <div className="user-details_card">
            {/* <h3>Top 5 repos</h3> */}
            {repos.map((repo, i) => (
              <>
                <div key={i}>
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
              </>
            ))}
            <a href={user.html_url} target="_blank" rel="noreferrer">
              <button type="button" className="btn">
                Visit GiHhub
              </button>
            </a>
          </div>
        </div>
      )}
    </>
  );
};

export default User;
