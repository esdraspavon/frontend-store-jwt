import React, { Component } from "react";
import { makeMainRoutes } from "./components/routes";
//import Header from "./components/Header";
const routes = makeMainRoutes();

class App extends Component {
  render() {
    return <div className="contenedor">{routes}</div>;
  }
}

export default App;
