import React from "react";
import { connect } from "react-redux";
import ReplayDetail from "../../components/ReplayDetail";
import SectionNavbar from "../../components/SectionNavbar";
import ReplayDetailNavbar from "../../components/ReplayDetailNavbar";
import * as ReplayActions from "../../actions/ReplayActions";
import * as AccountActions from "../../actions/AccountActions";


@connect(state => ({
  replay: state.replays.get(parseInt(state.router.params.id)),
  account: state.accounts.get(state.router.params.username)
}))
export default class ReplayDetailView extends React.Component {

  static get propTypes () {
    return {
      replay: React.PropTypes.object,
      account: React.PropTypes.object,
      activeSession: React.PropTypes.object
    };
  }

  render () {

    if (!this.props.replay || !this.props.account) {
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

    // if there's no account available then
    // we need to fetch it from the server
    if (!this.props.account) {

      // fetch the specific account from the server
      const account = AccountActions.fetchAccountByUsername(this.props.params.username);

      // dispatch the actions
      this.props.dispatch(account);

    }

    // if there's no replay available then
    // we need to fetch it from the server
    if (!this.props.replay) {

      // fetch the specific replay from the server
      const replay = ReplayActions.fetchReplayById(this.props.params.id);

      // dispatch the action
      this.props.dispatch(replay);

    }

  }

}
