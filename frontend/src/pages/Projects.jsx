import { Link } from "react-router-dom";
import "./projects.scss";

export default function Projects() {
  return (
    <>
      <h2>Projets</h2>
      <ol className="projects-section">
        <Link to="/projects/todolist">
          <li className="project">To do list</li>
        </Link>
        <Link to="/projects/startreker">
          <li className="project">Star Treker</li>
        </Link>
        <Link to="/projects/jollydays">
          <li className="project">Jollydays</li>
        </Link>
      </ol>
    </>
  );
}
