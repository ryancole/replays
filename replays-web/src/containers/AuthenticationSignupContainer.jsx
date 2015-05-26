/**
 * Module dependencies
 */

import React from 'react';
import connectToStores from 'flummox/connect';


/**
 * Components
 */

import AuthenticationSignupForm from '../components/AuthenticationSignupForm';


/**
 * Component definition
 */ 

class AuthenticationSignupContainer extends React.Component {

  constructor () {
    super();
    this._handleSignup = this._handleSignup.bind(this);
  }

  render() {
    return (
      <div className="row authenticationSignupContainer">
        <div className="col-sm-4">
          <AuthenticationSignupForm signup={this._handleSignup} />
        </div>
      </div>
    );
  }

  _handleSignup (username, password) {

    // get account actions
    let accounts = this.props.flux.getActions('accounts');

    // trigger create action
    accounts.create(username, password);
    
  }

}

AuthenticationSignupContainer = connectToStores(AuthenticationSignupContainer, {
  sessions: store => ({
    isAuthenticated: store.isAuthenticated()
  })
});


/**
 * Module exports
 */

export default AuthenticationSignupContainer;
