import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import "./css/Navbar.css";
class Navbar extends Component {
  render() {
    console.log(this.props.auth.isAuthenticated);
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
  }
}

export default Navbar;
