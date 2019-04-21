import React, { Component } from "react";
import "./css/AboutUs.css";
class AboutUs extends Component {
  render() {
    return (
      <div className="contenedor-nosotros">
        <div className="imagen">
          <img src={"/img/camisa_1.png"} alt="Imagen nosotros" />
        </div>
        <div className="contenido">
          <h2>Sobre nosotros</h2>
          <p>
            Mauris eu mi vitae dui imperdiet finibus id id orci. Morbi iaculis
            blandit augue rutrum laoreet. Etiam maximus bibendum nisi id
            tincidunt. Donec laoreet purus eleifend, semper urna quis, auctor
            felis. Etiam ultricies quis urna sed porttitor. Praesent sit amet
            dolor orci. Nam lacus purus, varius sit amet enim vitae, lobortis
            auctor diam. Morbi in tempor arcu. Aliquam efficitur lacus in ante
            viverra dapibus.
          </p>
        </div>
      </div>
    );
  }
}

export default AboutUs;
