import React from "react";
import "./css/Contact.css";
const Contact = props => {
  return (
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
  );
};

export default Contact;
