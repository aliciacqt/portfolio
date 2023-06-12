import "./about.scss";

export default function About() {
  return (
    <>
      <h2>À propos</h2>
      <p>
        Après 5 mois de formation intense à la Wild Code School, mes compétences
        techniques se composent de :
      </p>
      <h3>Stack technique</h3>
      <ol className="tech-section">
        <li className="tech-label">HTML</li>
        <li className="tech-label">CSS</li>
        <li className="tech-label">JavaScript</li>
        <li className="tech-label">React</li>
        <li className="tech-label">Node</li>
        <li className="tech-label">Express</li>
        <li className="tech-label">Tailwind</li>
        <li className="tech-label">SCSS</li>
        <li className="tech-label">MySQL</li>
      </ol>
      <h3>Outils de développement et gestion</h3>
      <ol className="tool-section">
        <li className="tool-label">VS Code</li>
        <li className="tool-label">Git</li>
        <li className="tool-label">GitHub</li>
        <li className="tool-label">Figma</li>
        <li className="tool-label">Agile</li>
        <li className="tool-label">Scrum</li>
      </ol>
    </>
  );
}
