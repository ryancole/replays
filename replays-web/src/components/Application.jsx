/**
 * Module dependencies
 */

import React from 'react';
import FluxComponent from 'flummox/component';
import connectToStores from 'flummox/connect';
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
        <ApplicationNavbar isAuthenticated={this.props.isAuthenticated} />
        <div className="container">
          <FluxComponent>
            <RouteHandler {...this.props} />
          </FluxComponent>
        </div>
      </div>
    );
  }

}

Application = connectToStores(Application, {
  sessions: store => ({
    isAuthenticated: store.isAuthenticated()
  })
});


/**
 * Module exports
 */

export default Application;
