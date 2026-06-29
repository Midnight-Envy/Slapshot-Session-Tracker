import { NavLink } from "react-router-dom";

function NavBar() {
  return (
    <nav className="navbar">
      <h1>Slapshot Session Tracker</h1>

      <div className="nav-links">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/upload">Upload</NavLink>
        <NavLink to="/sessions">Sessions</NavLink>
        <NavLink to="/players">Players</NavLink>
      </div>
    </nav>
  );
}

export default NavBar;