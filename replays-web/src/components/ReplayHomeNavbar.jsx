/**
 * Module dependencies
 */

import React from 'react';


/**
 * Components
 */

import ReplayHomeNavbarForm from './ReplayHomeNavbarForm';


/**
 * Component definition
 */ 

class ReplayHomeNavbar extends React.Component {
  render() {
    return (
      <div className="navbar-right">
        <ReplayHomeNavbarForm
          onUploadAttempt={this.props.onUploadAttempt} />
      </div>
    );
  }
}


/**
 * Module exports
 */

export default ReplayHomeNavbar;
