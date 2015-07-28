import React from "react";
import { connect } from "react-redux";

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

}
