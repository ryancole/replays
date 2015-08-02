import React from "react";
import { Link } from "react-router";


export default class AuthenticationNavbarLinks extends React.Component {

  static get propTypes () {
    return {
      activeSession: React.PropTypes.object
    };
  }

  render() {

    // if signed in, show signed in links
    if (!this.props.activeSession) {
      return this.getSignedOutLinks();
    } else {
      return this.getSignedInLinks();
    }

  }

  getSignedInLinks () {
    return (
      <div className="navbar-right">
        <p className="navbar-text">
          Signed in as {this.props.activeSession.username}
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
