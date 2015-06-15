import React from 'react';
import FluxComponent from 'flummox/component';
import ReplayTable from '../../components/ReplayTable';


class ApplicationReplayView extends React.Component {

  render () {
    return (
      <ReplayTable 
        replays={this.props.replays} />
    );
  }

}

export default class ApplicationReplayViewWrapper extends React.Component {

  render () {
    return (
      <FluxComponent connectToStores={{
        replays: store => ({
          replays: store.getAll()
        })
      }}>
        <ApplicationReplayView />
      </FluxComponent>
    );
  }

  componentDidMount () {

    // trigger the fetch replays action
    this._fetchReplays();

  }

  _fetchReplays () {

    const actions = this.props.flux.getActions('replays');

    // store needs the replays
    actions.getAll();

  }

}
