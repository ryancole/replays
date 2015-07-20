import React from "react";
import { Link } from "react-router";


export default class AuthenticationNavbarLinks extends React.Component {

  render() {

    // if signed in, show signed in links
    if (this.props.isAuthenticated === true) {
      return this.getSignedInLinks();
    }

    // default to signed out links
    return this.getSignedOutLinks();

  }

  getSignedInLinks () {
    return (
      <div className="navbar-right">
        <p className="navbar-text">
          Signed in as {this.props.activeSession.details.username}
        </p>
        <ul className="nav navbar-nav">
          <li>
            <Link to="/auth/signout">Sign Out</Link>
          </li>
        </ul>
      </div>
    );
  }

  getSignedOutLinks () {
    return (
      <div className="navbar-right">
        <ul className="nav navbar-nav">
          <li>
            <Link to="/auth/signin">Sign In</Link>
          </li>
          <li>
            <Link to="/auth/signup">Sign Up</Link>
          </li>
        </ul>
      </div>
    );
  }

}
