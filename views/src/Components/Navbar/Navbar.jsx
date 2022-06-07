import { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";
import { MdClose } from "react-icons/md";
import { FiMenu } from "react-icons/fi";
import NavLinks from "./NavLinks";
const Navbar = () => {
  return (
    <div>
      <div className="NavBar">
        <nav>
          <ul>
            <li>
              <NavLink to="/especialistas" onClick={() => closeMenu()}>
                Especialistas
              </NavLink>
            </li>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>{" "}
            <li>
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
