import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as ReplayActions from '../../actions/ReplayActions';

import ReplayTable from '../../components/ReplayTable';
import SectionNavbar from '../../components/SectionNavbar';
import ReplayHomeNavbar from '../../components/ReplayHomeNavbar';


@connect(state => ({
  replays: state.replays.toArray(),
  activeSession: state.session
}))
export default class ReplayIndexView extends React.Component {

  static get propTypes () {
    return {
      replays: React.PropTypes.array.isRequired,
      activeSession: React.PropTypes.object.isRequired
    };
  }

  constructor (props) {
    super(props);
    this._handleDeleteReplay = this._handleDeleteReplay.bind(this);
    this._handleToggleSharing = this._handleToggleSharing.bind(this);
    this.actions = bindActionCreators(ReplayActions, props.dispatch);
  }

  render () {
    return (
      <div>
        <div className="row">
          <div className="col-sm-12">
            <SectionNavbar label="Replays">
              <ReplayHomeNavbar
                activeSession={this.props.activeSession}
                fetchAllReplays={this.actions.fetchAllReplays} />
            </SectionNavbar>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-12">
            <ReplayTable 
              replays={this.props.replays}
              onDelete={this._handleDeleteReplay}
              onToggleSharing={this._handleToggleSharing} />
          </div>
        </div>
      </div>
    );
  }

  componentWillMount () {
    this.actions.fetchAllReplays();
  }

  _handleDeleteReplay (replay) {
    this.actions.deleteReplay(replay.id);
  }

  _handleToggleSharing (replay) {
    if (replay.public === false) {
      this.actions.makeReplayPublic(replay.id);
    } else {
      this.actions.makeReplayPrivate(replay.id);
    }
  }

}
