import React from 'react';
import AuthenticationNavbarLinks from './AuthenticationNavbarLinks';


export default class AuthenticationNavbar extends React.Component {

  render() {
    return (
      <div className="navbar">
        <AuthenticationNavbarLinks {...this.props} />
      </div>
    );
  }

}
