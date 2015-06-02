/**
 * Module dependencies
 */

import React from 'react';
import { RouteHandler } from 'react-router';


/**
 * Components
 */

import AccountNavbarContainer from './AccountNavbarContainer';


/**
 * Component definition
 */ 

class ApplicationContainer extends React.Component {

  render() {
    return (
      <div className="container applicationContainer">
        <div className="row">
          <div className="col-sm-2">
          </div>
          <div className="col-sm-10">

            <AccountNavbarContainer
              flux={this.props.flux} />

            <RouteHandler
              flux={this.props.flux}
              params={this.props.params} />

          </div>
        </div>
      </div>
    );
  }

}


/**
 * Module exports
 */

export default ApplicationContainer;
