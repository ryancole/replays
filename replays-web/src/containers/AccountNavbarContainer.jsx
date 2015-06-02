/**
 * Module dependencies
 */

import React from 'react';
import connectToStores from 'flummox/connect';


/**
 * Components
 */

import AccountNavbar from '../components/AccountNavbar';


/**
 * Component definition
 */ 

class AccountNavbarContainer extends React.Component {

  render() {
    return (
      <AccountNavbar
        flux={this.props.flux}
        activeSession={this.props.activeSession}
        onSignOutClick={this._handleSignOutClick} />
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
AccountNavbarContainer = connectToStores(AccountNavbarContainer, ['sessions']);


/**
 * Module exports
 */

export default AccountNavbarContainer;
