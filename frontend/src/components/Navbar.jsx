import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <ul className="navbar">
      <li>
        <Link to="/about" id="first">
          stack
        </Link>
      </li>
      <li>
        <Link to="/projects">projets</Link>
      </li>
      <li>
        <Link to="/contact" id="last">
          contact
        </Link>
      </li>
    </ul>
  );
}
