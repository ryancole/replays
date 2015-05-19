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

    console.log(this.props);

    return (
      <FluxComponent>
        <section>
          <header>
            <h1>Replays</h1>
          </header>
          <RouteHandler />
        </section>
      </FluxComponent>
    );
  }

}

/**
 * Module exports
 */

export default Application;