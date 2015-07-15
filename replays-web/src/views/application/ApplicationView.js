import React from 'react';
import { connect } from 'react-redux';
import { RouteHandler } from 'react-router';
import { bindActionCreators } from 'redux';

// action creators
import * as actions from '../../actions';

// ui components
import ApplicationLogo from '../../components/ApplicationLogo';
import ApplicationNavbar from '../../components/ApplicationNavbar';
import AuthenticationNavbar from '../../components/AuthenticationNavbar';


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
              actions={bindActionCreators(actions, this.props.dispatch)}
              activeSession={this.props.activeSession}
              isAuthenticated={this.props.isAuthenticated} />
          </div>
        </div>
      </div>
    );
  }

  componentWillReceiveProps (props) {

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
