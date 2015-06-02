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

  static get contextTypes () {
    return {
      router: React.PropTypes.func
    };
  }

  constructor () {

    super();

    // handle pre-binding
    this._handleSignup = this._handleSignup.bind(this);

  }

  componentWillReceiveProps (props) {
    if (props.activeSession != null && this.props.activeSession == null) {
      this.context.router.transitionTo("dashboard");
    }
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

// connect component to stores
AuthenticationSignupContainer = connectToStores(AuthenticationSignupContainer, ['sessions']);


/**
 * Module exports
 */

export default AuthenticationSignupContainer;
