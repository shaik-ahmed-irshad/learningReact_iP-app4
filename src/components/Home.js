import Search from './Search';
import Loading from './Loading';
import UserCard from './UserCard';
import Hero from './Hero';
const Home = (props) => {
  return (
    <>
      <div className="container">
        <Hero />
        <Search
          searchUsers={props.searchUsers}
          clearUsers={props.clearUsers}
          alert={props.alert}
          showAlert={props.showAlert}
        />
        {props.loading && <Loading />}
        {!props.loading && <UserCard users={props.users} loading={props.loading}/>}
      </div>
    </>
  );
}

export default Home