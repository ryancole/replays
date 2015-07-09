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
          <span className="navbar-brand">
            {this.props.label}
          </span>
        </div>
        {this.props.children}
      </div>
    );
  }

}


/**
 * Module exports
 */

export default SectionNavbar;
