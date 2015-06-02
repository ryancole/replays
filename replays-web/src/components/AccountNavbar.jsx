/**
 * Module dependencies
 */

import React from 'react';


/**
 * Components
 */

import AccountNavbarLinks from './AccountNavbarLinks';


/**
 * Component definition
 */ 

class AccountNavbar extends React.Component {

  constructor () {

    super();

    // event pre binding
    this._handleSignOutClick = this._handleSignOutClick.bind(this);

  }

  render() {
    return (
      <div className="navbar">
        <AccountNavbarLinks
          activeSession={this.props.activeSession}
          onSignOutClick={this._handleSignOutClick} />
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


/**
 * Module exports
 */

export default AccountNavbar;
