import "./App.css";
import NavBar from "./Components/Navigation/NavBar";
import "bootstrap/dist/css/bootstrap.min.css";
import Jumbotron from "./Components/Main/Jumbotron";
import Education from "./Components/Main/Education";
import Skills from "./Components/Main/Skills";
import Experience from "./Components/Main/Experience";
import AboutMe from "./Components/Main/AboutMe";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Jumbotron />
      <AboutMe />
      <Education />
      <Experience />
      <Skills />
    </div>
  );
}

export default App;
