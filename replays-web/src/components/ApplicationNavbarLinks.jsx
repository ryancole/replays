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
    if (this.props.isAuthenticated == true) {
      return this._getSignedInLinks();
    }
    return this._getSignedOutLinks();
  }

  _getSignedInLinks () {
    return (
      <ul className="nav navbar-nav">
        <li>

        </li>
      </ul>
    );
  }

  _getSignedOutLinks () {
    return (
      <ul className="nav navbar-nav navbar-right">
        <li>
          <Link to="signin">Sign In</Link>
        </li>
        <li>
          <Link to="signup">Sign Up</Link>
        </li>
      </ul>
    );
  }

}


/**
 * Module exports
 */

export default ApplicationNavbarLinks;
