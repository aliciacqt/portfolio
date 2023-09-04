import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <ul className="navbar">
      <Link to="/about">
        <li>stack</li>
      </Link>
      <Link to="/projects">
        <li>projets</li>
      </Link>
      <Link to="/contact">
        <li>contact</li>
      </Link>
    </ul>
  );
}
