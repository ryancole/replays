/**
 * Module dependencies
 */

import React from 'react';
import connectToStores from 'flummox/connect';


/**
 * Components
 */

import AuthenticationSigninForm from '../components/AuthenticationSigninForm';


/**
 * Component definition
 */ 

class AuthenticationSigninContainer extends React.Component {

  static get contextTypes () {
    return {
      router: React.PropTypes.func
    };
  }

  constructor () {

    super();

    // handler pre-binding
    this._handleSignin = this._handleSignin.bind(this);

  }

  componentWillReceiveProps (props) {
    if (props.activeSession != null && this.props.activeSession == null) {
      this.context.router.transitionTo("dashboard");
    }
  }

  render() {
    return (
      <div className="row authenticationSigninContainer">
        <div className="col-sm-4">
          <AuthenticationSigninForm signin={this._handleSignin} />
        </div>
      </div>
    );
  }

  _handleSignin (username, password) {

    // get session actions
    let sessions = this.props.flux.getActions('sessions');

    // trigger create action
    sessions.create(username, password);
    
  }

}

AuthenticationSigninContainer = connectToStores(AuthenticationSigninContainer, {
  sessions: store => ({
    activeSession: store.activeSession
  })
});


/**
 * Module exports
 */

export default AuthenticationSigninContainer;
