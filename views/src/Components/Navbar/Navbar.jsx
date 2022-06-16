import { NavLink } from "react-router-dom";
import "./Navbar.css";
import NavLinks from "./NavLinks";
const Navbar = () => {
  return (
    <div>
      <div className="NavBar">
        <nav>
          <ul>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/especialistas">Especialistas</NavLink>
            </li>
            <li>
              <NavLink to="/contacto">Contacto</NavLink>
            </li>
            <li>
              <NavLink to="/nosotros">Nosotros</NavLink>
            </li>
            <li>
              <NavLink to="/login">Login</NavLink>
            </li>
          </ul>
        </nav>
      </div>

      <NavLinks />
    </div>
  );
};

export default Navbar;
