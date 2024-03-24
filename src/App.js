import "./App.css";
import Navbar from "./components/Navbar";
import Search from "./components/Search";
import Card from "./components/UserCard";

function App() {
  return (
    <>
      <Navbar />
      <div className="container">
        <Search />
        <Card />
      </div>
    </>
  );
}

export default App;
