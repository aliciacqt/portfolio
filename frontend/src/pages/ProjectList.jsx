import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./projectList.scss";

export default function ProjectList() {
  const [projects, setProjects] = useState([]);

  const getAllProjects = () => {
    fetch(`${import.meta.env.VITE_BACKEND_URL}/api/projects/`)
      .then((response) => response.json())
      .then((data) => setProjects(data));
  };

  useEffect(() => {
    getAllProjects();
  }, []);

  return (
    <>
      <h2>Projets</h2>
      <ol className="projects-section">
        {projects.map((project) => (
          <Link to={`/projects/${project.id}`} key={`project-${project.id}`}>
            <li className="project">{project.title}</li>
          </Link>
        ))}
      </ol>
    </>
  );
}
