/**
 * Module dependencies
 */

import React from 'react';
import { RouteHandler } from 'react-router';


/**
 * Components
 */

import ApplicationLogo from '../components/ApplicationLogo';
import ApplicationNavbar from '../components/ApplicationNavbar';
import AccountNavbarContainer from './AccountNavbarContainer';


/**
 * Component definition
 */ 

class ApplicationContainer extends React.Component {

  render() {
    return (
      <div className="container">

        <AccountNavbarContainer
          flux={this.props.flux} />

        <div className="row">
          <div className="col-sm-2">

            <ApplicationLogo />
            <ApplicationNavbar />

          </div>
          <div className="col-sm-10">

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
