import React from 'react';
import { connect } from 'react-redux';
import ReplayTable from '../../components/ReplayTable';
import SectionNavbar from '../../components/SectionNavbar';
import ReplayHomeNavbar from '../../components/ReplayHomeNavbar';


@connect(state => ({
  replays: state.replays.toArray()
}))
export default class HomeReplaysView extends React.Component {

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
