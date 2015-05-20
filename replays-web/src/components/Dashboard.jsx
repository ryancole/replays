/**
 * Module dependencies
 */

import React from 'react';
import FluxComponent from 'flummox/component';
import ReplayList from './ReplayList';

/**
 * Define the Dashboard component
 */

class Dashboard extends React.Component {

  render() {
    return (
      <section>
        <FluxComponent connectToStores={'replays'}>
          <ReplayList />
        </FluxComponent>
      </section>
    );
  }

}

/**
 * Module exports
 */

export default Dashboard;