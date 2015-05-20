/**
 * Module dependencies
 */

import React from 'react';
import FluxComponent from 'flummox/component';
import { RouteHandler } from 'react-router';


/**
 * Component definition
 */ 

class Application extends React.Component {
  render() {
    return (
      <FluxComponent>
        <RouteHandler />
      </FluxComponent>
    );
  }
}


/**
 * Module exports
 */

export default Application;