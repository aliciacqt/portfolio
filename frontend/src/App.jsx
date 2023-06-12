import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import "./App.scss";

function App() {
  return (
    <Router>
      <div className="App">
        <img
          src="./src/assets/leaf-10.svg"
          alt="background, silhouette of a leaf"
          className="background leaf-10"
        />
        <img
          src="./src/assets/leaf-16.svg"
          alt="background, silhouette of a leaf"
          className="background leaf-16"
        />
        <header className="App-header">
          <Navbar />
          <h1 className="App-name">
            <Link to="/">Alicia Coquérant</Link>
          </h1>
        </header>
        <Routes>
          <Route path="/" element={<Home />} className="App-element" />
          <Route path="/about" element={<About className="App-element" />} />
          <Route
            path="/projects"
            element={<Projects className="App-element" />}
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
