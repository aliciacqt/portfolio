import "./about.scss";

export default function About() {
  const technos = [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Node.js",
    "Express.js",
    "Tailwind",
    "SCSS",
    "MySQL",
  ];

  const tools = ["VS Code", "Git", "GitHub", "Figma", "Agile", "Scrum"];

  return (
    <>
      <h2>Stack</h2>
      <p className="p-about">
        Au cours de 5 mois de formation intense, j'ai pu aquérir de solides
        connaissances et pratiquer sur tous les outils suivants :
      </p>
      <h3>Stack technique</h3>
      <ol className="tech-section">
        {technos.map((tech) => (
          <li className="tech-label" key={`tech-${tech}`}>
            {tech}
          </li>
        ))}
      </ol>
      <h3>Outils de développement et gestion</h3>
      <ol className="tool-section">
        {tools.map((tool) => (
          <li className="tool-label" key={`tool-${tool}`}>
            {tool}
          </li>
        ))}
      </ol>
    </>
  );
}
