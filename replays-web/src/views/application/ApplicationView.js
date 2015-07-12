import React from 'react';
import { connect } from 'redux/react';
import { RouteHandler } from 'react-router';
import { bindActionCreators } from 'redux';


/**
 * react components
 */

import ApplicationLogo from '../../components/ApplicationLogo';
import ApplicationNavbar from '../../components/ApplicationNavbar';
import AuthenticationNavbar from '../../components/AuthenticationNavbar';


/**
 * action creators
 */

import * as AccountActions from '../../actions/AccountActions';
import * as SessionActions from '../../actions/SessionActions';


@connect(state => ({
  activeSession: state.session,
  isAuthenticated: state.session != null
}))
export default class ApplicationView extends React.Component {

  static get propTypes () {
    return {
      activeSession: React.PropTypes.object,
      isAuthenticated: React.PropTypes.bool.isRequired
    };
  }

  static get contextTypes () {
    return {
      router: React.PropTypes.func
    };
  }

  render () {
    console.log(this.props);
    return (
      <div className="container">
        <AuthenticationNavbar
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
            <RouteHandler
              activeSession={this.props.activeSession}
              isAuthenticated={this.props.isAuthenticated}
              {...bindActionCreators(SessionActions, this.props.dispatch)} />
          </div>
        </div>
      </div>
    );
  }

  componentWillReceiveProps (props) {

    console.log('new props', props);

    // whether the user just logged in
    const justLoggedIn = (this.props.isAuthenticated == false &&
                          props.isAuthenticated == true);

    // whether the user just logged out
    const justLoggedOut = (this.props.isAuthenticated == true &&
                           props.isAuthenticated == false);

    // transition based on auth state change
    if (justLoggedIn == true) {
      this.context.router.transitionTo("replays");
    } else if (justLoggedOut == true) {
      this.context.router.transitionTo("application");
    }

  }

}
