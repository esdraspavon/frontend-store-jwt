import history from "../history";
import auth0 from "auth0-js";
import { AUTH_CONFIG } from "./auth0-variables";

export default class Auth {
  accessToken;
  idToken;
  expiresAt;

  auth0 = new auth0.WebAuth({
    domain: AUTH_CONFIG.domain,
    clientID: AUTH_CONFIG.clientId,
    redirectUri: AUTH_CONFIG.callbackUrl,
    audience: AUTH_CONFIG.apiURL,
    responseType: "token id_token",
    scope: "read:productos"
  });

  constructor() {
    this.login = this.login.bind(this);
    this.logout = this.logout.bind(this);
    this.handleAuthentication = this.handleAuthentication.bind(this);
    this.isAuthenticated = this.isAuthenticated.bind(this);
    this.getAccessToken = this.getAccessToken.bind(this);
    this.getIdToken = this.getIdToken.bind(this);
    this.renewSession = this.renewSession.bind(this);
  }

  login() {
    this.auth0.authorize();
  }

  handleAuthentication() {
    this.auth0.parseHash((err, authResult) => {
      if (authResult && authResult.accessToken && authResult.idToken) {
        this.setSession(authResult);
        history.replace("/productos");
      } else if (err) {
        history.replace("/productos");
        console.log(err);
        alert(`Error: ${err.error}. Check the console for further details.`);
      }
    });
  }

  getAccessToken() {
    const accessToken = localStorage.getItem("access_token");
    if (!accessToken) return new Error("Hubo un error de authenticacion");
    return accessToken;
  }

  getIdToken() {
    const idToken = localStorage.getItem("id_token");
    if (!idToken) return new Error("Hubo un error de authenticacion");
    return idToken;
  }

  setSession(authResult) {
    // Set isLoggedIn flag in localStorage
    localStorage.setItem("isLoggedIn", "true");
    localStorage.setItem("access_token", authResult.accessToken);
    localStorage.setItem("id_token", authResult.idToken);
    // let expiresAt = authResult.expiresIn * 1000 + new Date().getTime();
    let expiresAt = JSON.stringify(
      authResult.expiresIn * 1000 + new Date().getTime()
    );
    localStorage.setItem("expires_at", expiresAt);

    // Set the time that the access token will expire at
    this.accessToken = authResult.accessToken;
    this.idToken = authResult.idToken;
    this.expiresAt = expiresAt;

    // navigate to the home route
    history.replace("/productos");
  }

  renewSession() {
    this.auth0.checkSession({}, (err, authResult) => {
      if (authResult && authResult.accessToken && authResult.idToken) {
        this.setSession(authResult);
      } else if (err) {
        this.logout();
        console.log(err);
        alert(
          `Could not get a new token (${err.error}: ${err.error_description}).`
        );
      }
    });
  }

  logout() {
    // Remove tokens and expiry time
    localStorage.removeItem("access_token");
    localStorage.removeItem("id_token");
    localStorage.removeItem("expires_at");
    this.accessToken = null;
    this.idToken = null;
    this.expiresAt = 0;

    // Remove isLoggedIn flag from localStorage
    localStorage.removeItem("isLoggedIn");

    // this.auth0.logout({
    //   return_to: window.location.origin
    // });

    // navigate to the home route
    history.replace("/productos");
  }

  isAuthenticated() {
    // Check whether the current time is past the
    // access token's expiry time
    let expiresAt = JSON.parse(localStorage.getItem("expires_at"));
    //let expiresAt = this.expiresAt;
    return new Date().getTime() < expiresAt;
  }
}
