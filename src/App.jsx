import "./App.css";
import Navbar from "./components/navbar/Navbar";
import Home from "./components/home/Home";
import Skills from "./components/skills/Skills";
import Project from "./components/project/Project";
import Contact from "./components/contact/Contact";
import Education from "./components/education/Education";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Routes,
} from "react-router-dom";


function App() {
  return (
    <Router>
      <div className="App">
        <div className="App__component">
          <Routes>
            <Route path="/" exact Component={Home} />
            <Route path="/skills" Component={Skills} />
            <Route path="/projects" Component={Project} />
            <Route path="/educations" Component={Education} />
            <Route path="/contacts" Component={Contact} />
          </Routes>
        </div>
        <div className="App__navbar">
          <Navbar />
        </div>
      </div>
    </Router>
  );
}
 
export default App;
