/**
 * Module dependencies
 */

import React from 'react';
import connectToStores from 'flummox/connect';


/**
 * Components
 */

import ReplayDetail from '../components/ReplayDetail';


/**
 * Component definition
 */ 

class ReplayDetailContainer extends React.Component {

  componentDidMount () {

    // get session actions
    let replays = this.props.flux.getActions('replays');

    // trigger get all action
    replays.getById(this.props.params.id);

  }

  render() {

    if (this.props.replay == null) {
      return false;
    }

    return (
      <div className="replayRecentContainer">
        <ReplayDetail replay={this.props.replay} />
      </div>
    );

  }

}

ReplayDetailContainer = connectToStores(ReplayDetailContainer, {
  replays: store => ({
    replay: store.specificReplay
  })
});


/**
 * Module exports
 */

export default ReplayDetailContainer;
