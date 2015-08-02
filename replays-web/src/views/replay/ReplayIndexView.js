import React from "react";
import { connect } from "react-redux";

import ReplayTable from "../../components/ReplayTable";
import SectionNavbar from "../../components/SectionNavbar";

import * as ReplayActions from "../../actions/ReplayActions";


@connect(state => ({
  replays: state.replays.toArray()
}))
export default class ReplayIndexView extends React.Component {

  static get propTypes () {
    return {
      replays: React.PropTypes.array,
      activeSession: React.PropTypes.object
    };
  }

  render () {
    return (
      <div>
        <div className="row">
          <div className="col-sm-12">
            <SectionNavbar label="All Public Replays" />
          </div>
        </div>
        <div className="row">
          <div className="col-sm-12">
            <ReplayTable
              replays={this.props.replays}
              activeSession={this.props.activeSession} />
          </div>
        </div>
      </div>
    );
  }

  componentDidMount () {

    // fetch all public replays
    this.props.dispatch(ReplayActions.fetchAllReplays());

  }

}
