import React from 'react';
import { connect } from 'react-redux';
import { transitionTo } from 'redux-react-router';

// ui components
import ApplicationLogo from '../../components/ApplicationLogo';
import ApplicationNavbar from '../../components/ApplicationNavbar';
import AuthenticationNavbar from '../../components/AuthenticationNavbar';


@connect(state => ({
  activeSession: state.session
}))
export default class ApplicationView extends React.Component {

  static get propTypes () {
    return {
      activeSession: React.PropTypes.object
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
            {this.props.children}
          </div>
        </div>
      </div>
    );
  }

  componentWillReceiveProps (props) {

    // whether the user just logged in
    const justLoggedIn = (this.props.activeSession === null &&
                          props.activeSession !== null);

    // whether the user just logged out
    const justLoggedOut = (this.props.activeSession !== null &&
                           props.activeSession === null);

    // transition based on auth state change
    if (justLoggedIn == true) {
      dispatch(transitionTo("/replay"));
    } else if (justLoggedOut == true) {
      dispatch(transitionTo("/"));
    }

  }

}
