import React from 'react';
import FluxComponent from 'flummox/component';
import ReplayTable from '../../components/ReplayTable';
import SectionNavbar from '../../components/SectionNavbar';


class ApplicationReplayView extends React.Component {

  render () {
    return (
      <div>
        <div className="row">
          <div className="col-sm-12">
            <SectionNavbar
              label="Newest Replays" />
          </div>
        </div>
        <div className="row">
          <div className="col-sm-12">
            <ReplayTable 
              replays={this.props.replays} />
          </div>
        </div>
      </div>
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
