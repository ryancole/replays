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

    console.log(this.props);

    return (
      <FluxComponent connectToStores={'replays'}>
        <section>
          <ReplayList />
        </section>
      </FluxComponent>
    );
  }

}

/**
 * Module exports
 */

export default Dashboard;