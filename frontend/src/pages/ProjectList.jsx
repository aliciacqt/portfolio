import { Link } from "react-router-dom";
import "./projectList.scss";
import dataProjects from "../data/projectsAPI";

export default function ProjectList() {
  return (
    <>
      <h2>Projets</h2>
      <ol className="projects-section">
        {dataProjects.map((project) => (
          <li className="project-title">
            <Link
              to={`/projects/${project.id}`}
              key={`project-${project.id}`}
              className="project-link"
            >
              {project.title}
            </Link>
          </li>
        ))}
      </ol>
    </>
  );
}
