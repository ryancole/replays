import React from 'react';
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
              <ReplayHomeNavbar
                activeSession={this.props.activeSession} />
            </SectionNavbar>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-12">
            <ReplayTable 
              replays={this.props.replays}
              onDelete={this.props.onDelete}
              onToggleSharing={this.props.onToggleSharing} />
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
    this._handleToggleSharing = this._handleToggleSharing.bind(this);

  }

  render () {
    return (
      <HomeReplaysView {...this.props}
        onDelete={this._handleDelete}
        onToggleSharing={this._handleToggleSharing} />
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

  _handleToggleSharing (replay) {

    const replays = this.props.flux.getActions("replays");

    // toggle public state
    replays.toggleSharing(
      this.props.activeSession,
      replay.id,
      !replay.public
    );

  }

}
