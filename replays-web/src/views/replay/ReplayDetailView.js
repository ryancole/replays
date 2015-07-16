import React from 'react';
import { connect } from 'react-redux';
import ReplayDetail from '../../components/ReplayDetail';
import SectionNavbar from '../../components/SectionNavbar';
import ReplayDetailNavbar from '../../components/ReplayDetailNavbar';
import * as ReplayActions from '../../actions/ReplayActions';


@connect(state => ({
  replay: state.replays.get(parseInt(state.router.params.id)),
  activeSession: state.session
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

  componentDidMount () {

    // if there's no replay available then
    // we need to fetch it from the server
    if (this.props.replay == null) {

      // fetch the specific replay from the server
      const replay = ReplayActions.fetchReplayById(this.props.params.id);

      // dispatch the action
      this.props.dispatch(replay);

    }
    
  }

}
