/**
 * Module dependencies
 */

import React from 'react';
import connectToStores from 'flummox/connect';
import { RouteHandler } from 'react-router';


/**
 * Components
 */

import ApplicationNavbar from '../components/ApplicationNavbar';


/**
 * Component definition
 */ 

class ApplicationContainer extends React.Component {

  static get contextTypes () {
    return {
      router: React.PropTypes.func
    };
  }

  constructor () {

    super();

    // event pre binding
    this._handleSignOutClick = this._handleSignOutClick.bind(this);

  }

  render() {
    return (
      <div className="applicationContainer">

        <ApplicationNavbar
          flux={this.props.flux}
          activeSession={this.props.activeSession}
          onSignOutClick={this._handleSignOutClick}
          isAuthenticated={this.props.isAuthenticated} />

        <div className="container">
          <RouteHandler flux={this.props.flux} />
        </div>
      </div>
    );
  }

  _handleSignOutClick () {
    
    // get session actions
    let sessions = this.props.flux.getActions('sessions');

    // trigger signout action
    sessions.signout();

    // transition to dashboard
    this.context.router.transitionTo("dashboard");

  }

}

ApplicationContainer = connectToStores(ApplicationContainer, {
  sessions: store => ({
    activeSession: store.activeSession,
    isAuthenticated: store.isAuthenticated
  })
});


/**
 * Module exports
 */

export default ApplicationContainer;
