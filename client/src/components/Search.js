import React, { Component } from "react";
import "./css/Search.css";

class Search extends Component {
  readData = e => {
    // termino de busqueda
    const query = e.target.value;

    // enviamos por props
    this.props.search(query);
  };

  render() {
    return (
      <form className="buscador">
        <input type="text" placeholder="Búsqueda" onChange={this.readData} />
      </form>
    );
  }
}

export default Search;
