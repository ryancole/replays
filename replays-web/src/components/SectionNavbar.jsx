/**
 * Module dependencies
 */

import React from 'react';


/**
 * Component definition
 */ 

class SectionNavbar extends React.Component {

  render() {
    return (
      <div className="navbar">
        <div className="navbar-header">
          <h2 className="navbar-brand">
            {this.props.label}
          </h2>
        </div>
      </div>
    );
  }

}


/**
 * Module exports
 */

export default SectionNavbar;
