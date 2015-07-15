import React from 'react';
import { connect } from 'react-redux';
import ReplayTable from '../../components/ReplayTable';
import SectionNavbar from '../../components/SectionNavbar';
import ReplayHomeNavbar from '../../components/ReplayHomeNavbar';


@connect(state => ({
  replays: state.replays.toArray()
}))
export default class HomeReplaysView extends React.Component {

  static get propTypes () {
    return {
      actions: React.PropTypes.object.isRequired,
      replays: React.PropTypes.array.isRequired,
      activeSession: React.PropTypes.object.isRequired
    };
  }

  render () {
    return (
      <div>
        <div className="row">
          <div className="col-sm-12">
            <SectionNavbar label="Replays">
              <ReplayHomeNavbar
                activeSession={this.props.activeSession}
                fetchAllReplays={this.props.actions.fetchAllReplays} />
            </SectionNavbar>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-12">
            <ReplayTable 
              replays={this.props.replays}
              onDelete={this.props.actions.deleteReplay}
              onToggleSharing={this.props.onToggleSharing} />
          </div>
        </div>
      </div>
    );
  }

  componentDidMount () {
    this.props.actions.fetchAllReplays();
  }

}
