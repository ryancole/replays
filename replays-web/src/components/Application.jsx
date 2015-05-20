/**
 * Module dependencies
 */

import React from 'react';
import FluxComponent from 'flummox/component';
import { RouteHandler } from 'react-router';

/**
 * Define the Application component
 */ 

class Application extends React.Component {
  
  render() {
    return (
      <section>
        <header>
          <h1>Replays</h1>
        </header>
        <FluxComponent>
          <RouteHandler />
        </FluxComponent>
      </section>
    );
  }

}

/**
 * Module exports
 */

export default Application;