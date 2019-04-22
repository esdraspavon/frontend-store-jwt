import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import "./css/Navbar.css";
class Navbar extends Component {
  login = () => {
    this.props.auth.login();
  };
  logout = () => {
    this.props.auth.logout();
  };

  render() {
    const { isAuthenticated } = this.props.auth;
    let result;
    if (isAuthenticated()) {
      result = <a onClick={this.logout}>Cerrar Sesión</a>;
    } else {
      result = <a onClick={this.login}>Iniciar Sesión</a>;
    }
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
        {result}
      </nav>
    );
  }
}

export default Navbar;
