import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import ProjectList from "./pages/ProjectList";
import Project from "./components/Project";
import Contact from "./pages/Contact";
import "./App.scss";
import leaf10 from "./assets/img/leaf-10.svg";
import leaf16 from "./assets/img/leaf-16.svg";

function App() {
  return (
    <Router>
      <div className="App">
        <img
          src={leaf10}
          alt="background, silhouette of a leaf"
          className="background leaf-10"
        />
        <img
          src={leaf16}
          alt="background, silhouette of a leaf"
          className="background leaf-16"
        />
        <header className="App-header">
          <Navbar />
          <h1 className="App-name">
            <Link to="/">Alicia Coquérant</Link>
          </h1>
        </header>
        <main>
          <Routes>
            <Route path="/" element={<Home />} className="App-element" />
            <Route path="/about" element={<About className="App-element" />} />
            <Route
              path="/projects"
              element={<ProjectList className="App-element" />}
            />
            <Route
              path="/projects/:id"
              element={<Project className="Project-element" />}
            />
            <Route
              path="/contact"
              element={<Contact className="App-element" />}
            />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
