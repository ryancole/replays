/**
 * Module dependencies
 */

import React from 'react';
import connectToStores from 'flummox/connect';


/**
 * Components
 */

import ReplayDetail from '../components/ReplayDetail';
import SectionNavbar from '../components/SectionNavbar';


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

    let replay = this.props.replay;

    if (replay == null) {
      return false;
    }

    return (
      <div>
        <div className="row">
          <div className="col-sm-12">
            <SectionNavbar label={replay.filename} />
          </div>
        </div>
        <div className="row">
          <div className="col-sm-12">
            <ReplayDetail replay={replay} />
          </div>
        </div>
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
