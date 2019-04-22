import React, { Component } from "react";
import Product from "../components/Product";
import Search from "../components/Search";
import "./css/Products.css";
class Products extends Component {
  state = {
    products: [],
    query: ""
  };
  componentWillMount() {
    this.queryAPI();
  }
  queryAPI = () => {
    console.log(this.props.auth.isAuthenticated());
  };
  render() {
    return (
      <div className="productos">
        <h2>Nuestros productos</h2>
        <Search search={this.props.searchProduct} />
        <ul className="lista-productos">
          {/* {Object.keys(this.props.products).map(product => (
            <Product key={product} data={this.props.products[product]} />
          ))} */}
        </ul>
      </div>
    );
  }
}

export default Products;
