import React from 'react';
import FluxComponent from 'flummox/component';
import { RouteHandler } from 'react-router';

import ApplicationLogo from '../../components/ApplicationLogo';
import ApplicationNavbar from '../../components/ApplicationNavbar';
import AuthenticationNavbar from '../../components/AuthenticationNavbar';


export default class ApplicationView extends React.Component {

  static get contextTypes () {
    return {
      router: React.PropTypes.func
    };
  }

  constructor () {

    super();

    // pre bind event handlers
    this._handleSignout = this._handleSignout.bind(this);

  }

  render () {
    return (
      <div className="container">
        <AuthenticationNavbar
          onSignout={this._handleSignout}
          activeSession={this.props.activeSession}
          isAuthenticated={this.props.isAuthenticated} />
        <div className="row">
          <div className="col-sm-2">
            <ApplicationLogo />
            <ApplicationNavbar
              activeSession={this.props.activeSession}
              isAuthenticated={this.props.isAuthenticated} />
          </div>
          <div className="col-sm-10">
            <FluxComponent
              params={this.props.params}
              activeSession={this.props.activeSession}
              isAuthenticated={this.props.isAuthenticated}>
              <RouteHandler />
            </FluxComponent>
          </div>
        </div>
      </div>
    );
  }

  componentWillReceiveProps (props) {
    if (this.props.activeSession == null && props.activeSession != null) {
      this.context.router.transitionTo("replays");
    } else if (this.props.activeSession != null && props.activeSession == null) {
      this.context.router.transitionTo("application");
    }
  }

  _handleSignout () {

    // get session actions
    let sessions = this.props.flux.getActions("sessions");

    // trigger signout action
    sessions.signout();

  }

}
