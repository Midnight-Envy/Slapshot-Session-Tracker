import { NavLink } from "react-router-dom";
import slapshotLogo from "../assets/logo_slapshot.png";

function NavBar() {
  return (
    <nav className="navbar">
      <div className="nav-brand">
        <div className="nav-logo-box">
          <img src={slapshotLogo} alt="Slapshot" className="nav-logo" />
        </div>

        <h1>Session Tracker</h1>
      </div>

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