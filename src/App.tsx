import "./App.css";
import NavBar from "./Components/Navigation/NavBar";
import "bootstrap/dist/css/bootstrap.min.css";
import Jumbotron from "./Components/Main/Jumbotron";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Jumbotron />
    </div>
  );
}

export default App;
