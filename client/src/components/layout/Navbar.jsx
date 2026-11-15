
import { NavLink } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="navbar">
      <h2>TaskFlow</h2>

      <div className="nav-links">
        <NavLink to="/" end>
          Home
        </NavLink>

        <NavLink to="/dashboard">
          Dashboard
        </NavLink>

        <NavLink to="/profile">
          Profile
        </NavLink>

        <NavLink to="/login">
          Login
        </NavLink>
      </div>
    </nav>
  );
}

export default Navbar;
