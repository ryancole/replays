import React from "react";
import { connect } from "react-redux";
import { transitionTo } from "redux-react-router";

// ui components
import ApplicationLogo from "../../components/ApplicationLogo";
import ApplicationNavbar from "../../components/ApplicationNavbar";
import AuthenticationNavbar from "../../components/AuthenticationNavbar";


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
        activeSession: this.props.activeSession,
        isAuthenticated: this.props.isAuthenticated
      });
    });
  }

  componentWillMount() {
    if (this.props.isAuthenticated === false) {
      this.props.dispatch(transitionTo("/auth/signin"));
    }
  }

  componentWillReceiveProps (props) {

    // whether the user just logged in
    const justLoggedIn = (this.props.isAuthenticated === false &&
                          props.isAuthenticated === true);

    // whether the user just logged out
    const justLoggedOut = (this.props.isAuthenticated === true &&
                           props.isAuthenticated === false);

    // transition based on auth state change
    if (justLoggedIn === true) {
      this.props.dispatch(transitionTo("/replay"));
    } else if (justLoggedOut === true) {
      this.props.dispatch(transitionTo("/"));
    }

  }

}
