import React from "react";
import { NavLink } from "react-router-dom";
import "./css/Navbar.css";
const Navbar = props => {
  return (
    <nav className="navegacion">
      <NavLink to={"/nosotros"} activeClassName="activo">
        Nosotros
      </NavLink>
      <NavLink to={"/productos"} activeClassName="activo">
        Productos
      </NavLink>
      <NavLink to={"/contacto"} activeClassName="activo">
        Contacto
      </NavLink>
    </nav>
  );
};

export default Navbar;
