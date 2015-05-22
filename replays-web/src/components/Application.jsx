/**
 * Module dependencies
 */

import React from 'react';
import FluxComponent from 'flummox/component';
import { RouteHandler } from 'react-router';


/**
 * Components
 */

import ApplicationNavbar from './ApplicationNavbar';


/**
 * Component definition
 */ 

class Application extends React.Component {

  render() {
    return (
      <div className="application">
        <ApplicationNavbar />
        <div className="container">
          <FluxComponent>
            <RouteHandler {...this.props} />
          </FluxComponent>
        </div>
      </div>
    );
  }

}


/**
 * Module exports
 */

export default Application;
