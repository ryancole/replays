/**
 * Module dependencies
 */

import React from 'react';
import connectToStores from 'flummox/connect';


/**
 * Components
 */

import ReplayList from '../components/ReplayList';


/**
 * Component definition
 */ 

class ReplayRecentContainer extends React.Component {

  componentWillMount () {

    // get session actions
    let replays = this.props.flux.getActions('replays');

    // trigger get all action
    replays.getAllById(0);

  }

  render() {
    return (
      <div className="replayRecentContainer">
        <h1>Recent Replays</h1>
        <ReplayList replays={this.props.replays} />
      </div>
    );
  }

}

ReplayRecentContainer = connectToStores(ReplayRecentContainer, {
  replays: store => ({
    replays: store.replaysById
  })
});


/**
 * Module exports
 */

export default ReplayRecentContainer;
