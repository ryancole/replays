import React from 'react';
import FluxComponent from 'flummox/component';
import ReplayDetail from '../../components/ReplayDetail';
import SectionNavbar from '../../components/SectionNavbar';
import ReplayDetailNavbar from '../../components/ReplayDetailNavbar';


class AccountReplayView extends React.Component {

  render () {

    // needed values
    const { replay, account } = this.props;

    // make sure we've got them
    if (replay == null || account == null) {
      return null;
    }

    return (
      <div>
        <div className="row">
          <div className="col-sm-12">
            <SectionNavbar label={replay.filename}>
              <ReplayDetailNavbar
                replay={replay} />
            </SectionNavbar>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-12">
            <ReplayDetail
              replay={replay}
              account={this.props.account} />
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
          replay: store.getById(parseInt(this.props.params.id))
        })
      }}>
        <AccountReplayView
          account={this.props.account} />
      </FluxComponent>
    );
  }

  componentDidMount () {

    // convert string to int
    const id = parseInt(this.props.params.id);

    // trigger the fetch replay detail actions
    setTimeout(() => {
      this._fetchReplay(id);
    });

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
