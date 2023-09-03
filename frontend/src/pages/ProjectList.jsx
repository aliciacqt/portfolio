import { Link } from "react-router-dom";
import "./projectList.scss";
import dataProjects from "../data/projectsAPI";

export default function ProjectList() {
  return (
    <>
      <h2>Projets</h2>
      <ol className="projects-section">
        {dataProjects.map((project) => (
          <Link to={`/projects/${project.id}`} key={`project-${project.id}`}>
            <li className="project">{project.title}</li>
          </Link>
        ))}
      </ol>
    </>
  );
}
