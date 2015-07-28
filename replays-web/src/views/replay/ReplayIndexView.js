import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import ReplayTable from "../../components/ReplayTable";
import SectionNavbar from "../../components/SectionNavbar";
import ReplayHomeNavbar from "../../components/ReplayHomeNavbar";

import * as ReplayActions from "../../actions/ReplayActions";


@connect(state => ({
  replays: state.replays.toArray()
}))
export default class ReplayIndexView extends React.Component {

  static get propTypes () {
    return {
      replays: React.PropTypes.array.isRequired,
      activeSession: React.PropTypes.object
    };
  }

  constructor (props) {

    super(props);

    // bind the action handlers
    this.actions = bindActionCreators(ReplayActions, props.dispatch);

    // bind event handlers
    this.handleDeleteReplay = this.handleDeleteReplay.bind(this);
    this.handleToggleSharing = this.handleToggleSharing.bind(this);

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
              onDelete={this.handleDeleteReplay}
              onToggleSharing={this.handleToggleSharing} />
          </div>
        </div>
      </div>
    );
  }

  componentDidMount () {
    const { username } = this.props.params;
    this.actions.fetchAllReplays(username);
  }

  handleDeleteReplay (replay) {
    this.actions.deleteReplay(replay.id);
  }

  handleToggleSharing (replay) {
    if (replay.public === false) {
      this.actions.makeReplayPublic(replay.id);
    } else {
      this.actions.makeReplayPrivate(replay.id);
    }
  }

}
