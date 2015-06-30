import React from 'react';
import FluxComponent from 'flummox/component';
import ReplayTable from '../../components/ReplayTable';
import SectionNavbar from '../../components/SectionNavbar';
import ReplayHomeNavbar from '../../components/ReplayHomeNavbar';


class HomeReplaysView extends React.Component {

  render () {
    return (
      <div>
        <div className="row">
          <div className="col-sm-12">
            <SectionNavbar label="Replays">
              <FluxComponent>
                <ReplayHomeNavbar
                  activeSession={this.props.activeSession} />
              </FluxComponent>
            </SectionNavbar>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-12">
            <ReplayTable 
              replays={this.props.replays}
              onDelete={this.props.onDelete} />
          </div>
        </div>
      </div>
    );
  }

}

export default class HomeReplaysViewWrapper extends React.Component {

  constructor () {

    super();

    this._handleDelete = this._handleDelete.bind(this);

  }

  render () {
    return (
      <FluxComponent connectToStores={{
        replays: store => ({
          replays: store.getAll()
        })
      }}>
        <HomeReplaysView {...this.props}
          onDelete={this._handleDelete} />
      </FluxComponent>
    );
  }

  componentDidMount () {
    setTimeout(() => {

      const replays = this.props.flux.getActions("replays");

      // store needs the replays
      replays.getAll(this.props.activeSession);

    });
  }

  _handleDelete (replay) {

    const replays = this.props.flux.getActions("replays");

    // remove the replay
    replays.remove(
      this.props.activeSession,
      replay.id
    );

  }

}
