import React from "react";
import AuthenticationNavbarLinks from "./AuthenticationNavbarLinks";


export default class AuthenticationNavbar extends React.Component {

  constructor () {

    super();

    this.style = {
      marginTop: "20px"
    };

  }

  render() {
    return (
      <div className="navbar" style={this.style}>
        <AuthenticationNavbarLinks {...this.props} />
      </div>
    );
  }

}
