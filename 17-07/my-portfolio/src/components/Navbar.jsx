import { Link, NavLink } from "react-router-dom";

function Navbar() {
  const navLinkStyle = ({ isActive }) => ({
    color: isActive ? "#FF4D6D" : "#333",
    fontWeight: isActive ? "bold" : "normal",
  });

  return (
    <nav className="navbar">
      <Link to="/" className="logo">Jagruti.dev</Link>

      <div className="nav-links">
        <NavLink to="/" style={navLinkStyle} end>Home</NavLink>
        <NavLink to="/about" style={navLinkStyle}>About</NavLink>
        <NavLink to="/projects" style={navLinkStyle}>Projects</NavLink>
        <NavLink to="/contact" style={navLinkStyle}>Contact</NavLink>
      </div>
    </nav>
  );
}

export default Navbar;