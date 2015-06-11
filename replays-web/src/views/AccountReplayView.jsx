import React from 'react';
import FluxComponent from 'flummox/component';
import ReplayDetail from '../components/ReplayDetail';
import SectionNavbar from '../components/SectionNavbar';


class AccountReplayView extends React.Component {

  render () {
    return (
      <div>
        <div className="row">
          <div className="col-sm-12">
            <SectionNavbar
              label={this.props.replay.filename} />
          </div>
        </div>
        <div className="row">
          <div className="col-sm-12">
            <ReplayDetail
              replay={this.props.replay} />
          </div>
        </div>
      </div>
    );
  }

}

export default class AccountReplayViewWrapper extends React.Component {

  render () {
    return (
      <FluxComponent connectToStores={{
        replays: store => ({
          replay: store.getById(this.props.params.id)
        })
      }}>
        <AccountReplayView
          account={this.props.account} />
      </FluxComponent>
    );
  }

  componentDidMount () {

    // trigger the fetch replay detail action
    this._fetchAccount(this.props.params.username);

  }

  _fetchReplay (id) {

    const store = this.props.flux.getStore('replays');

    // check store for the replay
    if (store.hasReplay(id) == false) {

      const actions = this.props.flux.getActions('replays');

      // store needs the replay
      actions.getById(id);

    }

  }

}
