/**
 * Module dependencies
 */

import React from 'react';
import { Link } from 'react-router';


/**
 * Component definition
 */ 

class ApplicationNavbar extends React.Component {

  render() {
    return (
      <div className="row">
        <div className="col-sm-12">
          <ul className="nav">
            <li>
              <Link to="replay-home">
                Home
              </Link>
            </li>
          </ul>
        </div>
      </div>
    );
  }

}


/**
 * Module exports
 */

export default ApplicationNavbar;
