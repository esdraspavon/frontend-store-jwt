import React, { Component } from "react";
import "./css/Contact.css";
class Contact extends Component {
  render() {
    const { isAuthenticated } = this.props.auth;
    return (
      <React.Fragment>
        {!isAuthenticated() ? (
          <div className="contenedor-boton">
            <p>Para enviar un mensaje debes estar logueado</p>
            <a className="boton" onClick={this.login}>
              Iniciar Sesión
            </a>
          </div>
        ) : (
          <React.Fragment>
            <form>
              <legend>Formulario de contacto</legend>
              <div className="input-field">
                <label>Nombre: </label>
                <input type="text" placeholder="Tu nombre" />
              </div>
              <div className="input-field">
                <label>Email: </label>
                <input type="text" placeholder="Tu email" />
              </div>
              <div className="input-field">
                <label>Mensaje: </label>
                <textarea type="text" placeholder="Tu nombre" />
              </div>
              <div className="input-field enviar">
                <input type="submit" value="enviar" />
              </div>
            </form>
          </React.Fragment>
        )}
      </React.Fragment>
    );
  }
}

export default Contact;
