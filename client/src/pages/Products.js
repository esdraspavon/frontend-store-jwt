import React, { Component } from "react";
import Product from "../components/Product";
import Search from "../components/Search";
import "./css/Products.css";
import axios from "axios";
class Products extends Component {
  state = {
    products: [],
    query: ""
  };
  componentWillMount() {
    this.queryAPI();
  }
  queryAPI = () => {
    const { getAccessToken } = this.props.auth;

    const headers = { Authorization: `Bearer ${getAccessToken()}` };

    const url = "http://localhost:5000/productos";

    return axios.get(url, { headers }).then(resp => {
      this.setState({ products: resp.data });
    });
  };
  login = () => {
    this.props.auth.login();
  };
  render() {
    const { isAuthenticated } = this.props.auth;
    return (
      <div className="productos">
        {!isAuthenticated() ? (
          <div className="contenedor-boton">
            <p>Para ver el contenido debes estar logueado</p>
            <a className="boton" onClick={this.login}>
              Iniciar Sesión
            </a>
          </div>
        ) : (
          <React.Fragment>
            <h2>Nuestros productos</h2>
            <Search search={this.props.searchProduct} />
            <ul className="lista-productos">
              {Object.keys(this.state.products).map(product => (
                <Product key={product} data={this.state.products[product]} />
              ))}
            </ul>
          </React.Fragment>
        )}
      </div>
    );
  }
}

export default Products;
