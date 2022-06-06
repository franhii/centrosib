import { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";
import { MdClose } from "react-icons/md";
import { FiMenu } from "react-icons/fi";
import NavLinks from "./NavLinks"
const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const handleToggle = () => {
    setNavbarOpen((prev) => !prev);
  };
  const closeMenu = () => {
    setNavbarOpen(false);
  };
  return (
    <div>
      <div className="NavBar">
        <nav>
          {/* <button onClick={handleToggle}>
            {navbarOpen ? (
              <MdClose style={{ color: "#fff", width: "40px", height: "40px" }} />
            ) : (
              <FiMenu
                style={{ color: "#7b7b7b", width: "40px", height: "40px" }}
              />
            )}
          </button> */}
          <ul className={`menuNav ${navbarOpen ? " showMenu" : ""}`}>
            <li>
              <NavLink to="/especialistas" onClick={() => closeMenu()}>
                Especialistas
              </NavLink>
            </li>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>  <li>
              <NavLink to="/nosotros">Nosotros</NavLink>
            </li>
          </ul>
        </nav>
      </div>

      <NavLinks />
    </div>
  );
};

export default Navbar;
