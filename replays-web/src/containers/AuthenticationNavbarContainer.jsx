/**
 * Module dependencies
 */

import React from 'react';
import connectToStores from 'flummox/connect';


/**
 * Components
 */

import AuthenticationNavbar from '../components/AuthenticationNavbar';


/**
 * Component definition
 */ 

class AuthenticationNavbarContainer extends React.Component {

  render() {
    return (
      <div className="row">
        <div className="col-sm-12">

          <AuthenticationNavbar
            flux={this.props.flux}
            activeSession={this.props.activeSession}
            onSignOutClick={this._handleSignOutClick} />

        </div>
      </div>
    );
  }

  _handleSignOutClick () {
    
    // get session actions
    let sessions = this.props.flux.getActions("sessions");

    // trigger signout action
    sessions.signout();

    // transition to dashboard
    this.context.router.transitionTo("dashboard");

  }

  static get contextTypes () {
    return {
      router: React.PropTypes.func
    };
  }

}

// connect component to stores
AuthenticationNavbarContainer = connectToStores(AuthenticationNavbarContainer, ['sessions']);


/**
 * Module exports
 */

export default AuthenticationNavbarContainer;
