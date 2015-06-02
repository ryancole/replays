/**
 * Module dependencies
 */

import React from 'react';
import connectToStores from 'flummox/connect';


/**
 * Components
 */

import ReplayTable from '../components/ReplayTable';


/**
 * Component definition
 */ 

class ReplayRecentContainer extends React.Component {

  componentWillMount () {

    // get session actions
    let replays = this.props.flux.getActions('replays');

    // the amount to skip
    let skip = 0;

    // trigger get all action
    replays.getAllById(skip);

  }

  render() {
    return (
      <div className="replayRecentContainer">
        <h1>Recent Replays</h1>
        <ReplayTable replays={this.props.replays} />
      </div>
    );
  }

}

// connect component to store
ReplayRecentContainer = connectToStores(ReplayRecentContainer, {
  replays: store => ({
    replays: store.replaysById
  })
});


/**
 * Module exports
 */

export default ReplayRecentContainer;
