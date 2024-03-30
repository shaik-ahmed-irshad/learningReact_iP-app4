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
  console.log(user,'--------olalalaaa-------', repos);
  return (
    <>
      {loading && <Loading />}
      {!loading && (
        <div className={"tpn_card tpn_card-user flex-container"}>
          <div className="user-img_card max-width-200">
            <img className="user-img" alt="user-img" src={user.avatar_url} />
            {/* style={{ width: "180px" }} */}
            <div className="userImg_text">
              <h3>{user.name}</h3>
              <p>{user.bio}</p>
            </div>
          </div>
          <div className="user-details_card">
            {/* <h3>Top 5 repos</h3> */}
            {repos.map((repo, i) => (
              <>
                <div key={i}>
                  <h3>{repo.name}</h3>
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
          </div>
        </div>
      )}
    </>
  );
};

export default User;
