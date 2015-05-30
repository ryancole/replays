/**
 * Module dependencies
 */

import React from 'react';
import { Link } from 'react-router';


/**
 * Component definition
 */ 

class ApplicationNavbarLinks extends React.Component {

  render() {

    // if signed in, show signed in links
    if (this.props.isAuthenticated == true) {
      return this._getSignedInLinks();
    }

    // default to signed out links
    return this._getSignedOutLinks();

  }

  _getSignedInLinks () {
    return (
      <div className="collapse navbar-collapse navbar-right">
        <p className="navbar-text">{this.props.activeSession.username}</p>
        <ul className="nav navbar-nav">
          <li>
            <a onClick={this.props.onSignOutClick}>Sign Out</a>
          </li>
        </ul>
      </div>
    );
  }

  _getSignedOutLinks () {
    return (
      <div className="collapse navbar-collapse navbar-right">
        <ul className="nav navbar-nav">
          <li>
            <Link to="signin">Sign In</Link>
          </li>
          <li>
            <Link to="signup">Sign Up</Link>
          </li>
        </ul>
      </div>
    );
  }

}


/**
 * Module exports
 */

export default ApplicationNavbarLinks;
