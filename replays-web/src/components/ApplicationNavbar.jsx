/**
 * Module dependencies
 */

import React from 'react';


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
            <a className="navbar-brand">League Replay Database</a>
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
