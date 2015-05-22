/**
 * Module dependencies
 */

import React from 'react';
import FluxComponent from 'flummox/component';


/**
 * Components
 */

import ReplayListing from './ReplayListing';


/**
 * Component definition
 */

class Dashboard extends React.Component {

  render() {
    return (
      <FluxComponent connectToStores={'replays'}>
        <ReplayListing />
      </FluxComponent>
    );
  }

}


/**
 * Module exports
 */

export default Dashboard;