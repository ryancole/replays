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
    if (props.isAuthenticated == true && this.props.isAuthenticated == false) {
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
    isAuthenticated: store.isAuthenticated()
  })
});


/**
 * Module exports
 */

export default AuthenticationSigninContainer;
