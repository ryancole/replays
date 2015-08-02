import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import ReplayTable from "../../components/ReplayTable";
import SectionNavbar from "../../components/SectionNavbar";
import ReplayHomeNavbar from "../../components/ReplayHomeNavbar";

import * as ReplayActions from "../../actions/ReplayActions";
import * as AccountActions from "../../actions/AccountActions";


@connect(state => ({
  replays: state.replays.filter(r => r.accountUsername === state.router.params.username).toArray(),
  account: state.accounts.get(state.router.params.username)
}))
export default class AccountIndexView extends React.Component {

  static get propTypes () {
    return {
      replays: React.PropTypes.array,
      account: React.PropTypes.object,
      activeSession: React.PropTypes.object
    };
  }

  constructor (props) {

    super(props);

    // bind the action creators
    this.actions = bindActionCreators(ReplayActions, props.dispatch);

    // bind event handlers
    this.handleDeleteReplay = this.handleDeleteReplay.bind(this);

  }

  render () {

    // it's possible the account has not been
    // fetched from the server yet, no need
    // to render until we have it
    if (!this.props.account) {
      return false;
    }

    return (
      <div>
        <div className="row">
          <div className="col-sm-12">
            <SectionNavbar
              label={`${this.props.account.username}'s replays`}>
              <ReplayHomeNavbar
                account={this.props.account}
                activeSession={this.props.activeSession}
                fetchAllReplays={this.actions.fetchAllReplays} />
            </SectionNavbar>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-12">
            <ReplayTable
              account={this.props.account}
              replays={this.props.replays}
              onDelete={this.handleDeleteReplay}
              activeSession={this.props.activeSession} />
          </div>
        </div>
      </div>
    );

  }

  componentDidMount () {

    const { username } = this.props.params;

    // fetch replays for the username
    // specified in the url
    this.props.dispatch(ReplayActions.fetchAllReplays(username));

    // might also need to fetch the
    // account details if they aren't
    // already in the store
    if (!this.props.account) {
      this.props.dispatch(AccountActions.fetchAccountByUsername(username));
    }

  }

  handleDeleteReplay (replay) {

    // request that the specified replay
    // is deleted from the server
    this.props.dispatch(ReplayActions.deleteReplay(replay.id));

  }

}
