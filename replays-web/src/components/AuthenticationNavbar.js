import React from 'react';
import AuthenticationNavbarLinks from './AuthenticationNavbarLinks';


class AuthenticationNavbar extends React.Component {

  render() {
    return (
      <div className="navbar">
        <AuthenticationNavbarLinks {...this.props} />
      </div>
    );
  }

}

export default AuthenticationNavbar;
