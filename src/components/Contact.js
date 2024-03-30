import './css/Contact.css'
import Loading from './Loading';
// import {Link} from 'react-router-dom'
const Contact = ({loading}) => {
  return (
    <center>
      {loading && <Loading />}
      {!loading && (
        <div className="wrapper margin-class">
          {/* -------------------------------------- */}
          <div className="profile">
            <img
              src={"https://avatars.githubusercontent.com/u/162453728?v=4"}
              className="thumbnail"
              alt="DP"
            />
            <h3 className="name">Ahmed Irshad 👻</h3>
            {/* {user.bio && <p className="title">{user.bio}</p>} */}
            <p className="description">
              mera description hai idher! samaj jane ki rehti 😎
            </p>
            <a href={"https://hoorain.app"} target="_blank" rel="noreferrer">
              <button type="button" className="btn">
                Visit My Portfolio
              </button>
            </a>
          </div>

          {/* <div className="social-icons">
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
            <a href="/">
              <i className="fa-solid fa-user"></i>
            </a>
            <h4>{user.following}</h4>
            <p>Following</p>
          </div>

          <div className="icon">
            <a href="/">
              <i className="fa-solid fa-users"></i>
            </a>
            <h4>{user.followers}</h4>
            <p>Followers</p>
          </div>

          <div className="icon">
            <a href="/">
              <i className="fa-solid fa-flag"></i>
            </a>
            <h4>{user.public_repos}</h4>
            <p>Public Reops</p>
          </div>
          <div className="icon">
            <a href="/">
              <i className="fa-solid fa-flag"></i>
            </a>
            <h4>{user.public_gists}</h4>
            <p>Public Gists</p>
          </div>
        </div> */}
        </div>
      )}
    </center>
  );
}

export default Contact