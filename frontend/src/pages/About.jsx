import { useState, useEffect } from "react";
import "./about.scss";

export default function About() {
  const [techs, setTechs] = useState([]);
  const [tools, setTools] = useState([]);

  const getAllTechnos = () => {
    fetch(`${import.meta.env.VITE_BACKEND_URL}/api/technos`)
      .then((response) => response.json())
      .then((data) => setTechs(data));
  };

  const getAllTools = () => {
    fetch(`${import.meta.env.VITE_BACKEND_URL}/api/tools`)
      .then((response) => response.json())
      .then((data) => setTools(data));
  };

  useEffect(() => {
    getAllTechnos();
  }, []);

  useEffect(() => {
    getAllTools();
  }, []);

  return (
    <>
      <h2>À propos</h2>
      <p>
        Au cours de 5 mois de formation intense, j'ai pu aquérir de solides
        connaissances et pratiquer sur tous les outils suivants :
      </p>
      <h3>Stack technique</h3>
      <ol className="tech-section">
        {techs.map((tech) => (
          <li className="tech-label" key={`tech-${tech.id}`}>
            {tech.technoName}
          </li>
        ))}
      </ol>
      <h3>Outils de développement et gestion</h3>
      <ol className="tool-section">
        {tools.map((tool) => (
          <li className="tool-label" key={`tool-${tool.id}`}>
            {tool.toolName}
          </li>
        ))}
      </ol>
    </>
  );
}
