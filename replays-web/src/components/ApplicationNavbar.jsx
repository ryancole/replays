/**
 * Module dependencies
 */

import React from 'react';
import { Link } from 'react-router';


/**
 * Components
 */

import ApplicationNavbarLinks from './ApplicationNavbarLinks';


/**
 * Component definition
 */ 

class ApplicationNavbar extends React.Component {

  render() {
    return (
      <div className="navbar navbar-default navbar-fixed-top">
        <div className="container">
          <div className="navbar-header">
            <Link className="navbar-brand" to="dashboard">League Replay Database</Link>
          </div>
          <ApplicationNavbarLinks
            activeSession={this.props.activeSession}
            onSignOutClick={this.props.onSignOutClick}
            isAuthenticated={this.props.isAuthenticated} />
        </div>
      </div>
    );
  }

}


/**
 * Module exports
 */

export default ApplicationNavbar;
