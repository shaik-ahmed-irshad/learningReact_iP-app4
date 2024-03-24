import "./App.css";
import Navbar from "./components/Navbar";
import Card from "./components/UserCard";

function App() {
  return (
    <>
      <Navbar />
      <div className="container">
        <Card />
      </div>
    </>
  );
}

export default App;
