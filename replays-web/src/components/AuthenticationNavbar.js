import React from "react";
import AuthenticationNavbarLinks from "./AuthenticationNavbarLinks";


export default class AuthenticationNavbar extends React.Component {

  static get propTypes () {
    return {
      activeSession: React.PropTypes.object
    };
  }

  constructor () {

    super();

    this.style = {
      marginTop: "20px"
    };

  }

  render() {
    return (
      <div className="navbar" style={this.style}>
        <AuthenticationNavbarLinks
          activeSession={this.props.activeSession} />
      </div>
    );
  }

}
