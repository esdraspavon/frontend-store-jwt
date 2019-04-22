import React from "react";
import { Route, Router } from "react-router-dom";

//Auth0
import Callback from "./Callback/Callback";
import Auth from "../Auth/Auth";
import history from "../history";

//Components
import Navbar from "./Navbar";
import Header from "./Header";
import Products from "../pages/Products";
import AboutUs from "../pages/AboutUs";
import Contact from "../pages/Contact";
import ProductDetail from "../pages/ProductDetail";

const auth = new Auth();

const handleAuthentication = ({ location }) => {
  if (/access_token|id_token|error/.test(location.hash)) {
    auth.handleAuthentication();
  }
};

export const makeMainRoutes = () => {
  return (
    <Router history={history}>
      <div className="container">
        <Header />
        <Navbar />

        <Route
          exact
          path="/"
          render={props => (
            <Products
              // products={result}
              searchProduct={this.searchProduct}
              auth={auth}
              {...props}
            />
          )}
        />
        <Route exact path="/nosotros" component={AboutUs} />
        <Route exact path="/contacto" component={Contact} />

        <Route
          exact
          path="/productos"
          render={props => (
            <Products
              // products={result}
              searchProduct={this.searchProduct}
              auth={auth}
              {...props}
            />
          )}
        />

        <Route
          exact
          path="/producto/:productId"
          render={props => {
            console.log(props);
            let idProducto = props.match.params.productId;
            return (
              <ProductDetail
                product={this.state.products[idProducto]}
                auth={auth}
                {...props}
              />
            );
          }}
        />
        <Route
          path="/callback"
          render={props => {
            handleAuthentication(props);
            return <Callback {...props} />;
          }}
        />
      </div>
    </Router>
  );
};
