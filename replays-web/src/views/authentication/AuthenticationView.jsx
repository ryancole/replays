import React from 'react';
import FluxComponent from 'flummox/component';
import { RouteHandler } from 'react-router';


class AuthenticationView extends React.Component {

  render () {
    return (
      <RouteHandler {...this.props} />
    );
  }

}

export default class AuthenticationViewWrapper extends React.Component {

  constructor () {

    super();

    // pre bind event handlers
    this._handleSignup = this._handleSignup.bind(this);
    this._handleSignin = this._handleSignin.bind(this);

  }

  render () {
    return (
      <FluxComponent>
        <AuthenticationView
          onSignin={this._handleSignin}
          onSignup={this._handleSignup} />
      </FluxComponent>
    );
  }

  _handleSignin (username, password) {

    // get session actions
    let sessions = this.props.flux.getActions('sessions');

    // trigger create action
    sessions.create(username, password);
    
  }

  _handleSignup (username, password) {

    // get account actions
    let sessions = this.props.flux.getActions('accounts');

    // trigger create action
    sessions.create(username, password);

  }

}
