import React from "react";
import { connect } from "react-redux";
import { transitionTo } from "redux-react-router";

import ApplicationLogo from "../../components/ApplicationLogo";
import ApplicationNavbar from "../../components/ApplicationNavbar";
import AuthenticationNavbar from "../../components/AuthenticationNavbar";


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
          activeSession={this.props.activeSession} />
        <div className="row">
          <div className="col-sm-2">
            <ApplicationLogo />
            <ApplicationNavbar
              activeSession={this.props.activeSession} />
          </div>
          <div className="col-sm-10">
            {this.renderChildren()}
          </div>
        </div>
      </div>
    );
  }

  renderChildren () {
    return React.Children.map(this.props.children, child => {
      return React.cloneElement(child, {
        dispatch: this.props.dispatch,
        activeSession: this.props.activeSession
      });
    });
  }

  componentWillReceiveProps (props) {

    // we detect signing in or out by observing
    // changes to the current active session
    if (!this.props.activeSession && props.activeSession) {

      // in the case where we just signed in, go ahead
      // and transition to the user's replay page
      this.props.dispatch(
        transitionTo(`/${props.activeSession.username}`)
      );

    } else if (this.props.activeSession && !props.activeSession) {

      // in the case where we just signed out, lets
      // transition away from the signout view
      this.props.dispatch(transitionTo("/"));

    }

  }

}
