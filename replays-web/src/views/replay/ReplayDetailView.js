import React from 'react';
import { connect } from 'react-redux';
import SectionNavbar from '../../components/SectionNavbar';
import ReplayDetail from '../../components/ReplayDetail';
import ReplayDetailNavbar from '../../components/ReplayDetailNavbar';


@connect(state => ({
  replay: state.replays.get(parseInt(state.router.params.id))
}))
export default class ReplayDetailView extends React.Component {

  render () {

    if (!this.props.replay) {
      return null;
    }

    return (
      <div>
        <div className="row">
          <div className="col-sm-12">
            <SectionNavbar
              label={this.props.replay.filename}>
              <ReplayDetailNavbar
                replay={this.props.replay}
                activeSession={this.props.activeSession} />
            </SectionNavbar>
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
