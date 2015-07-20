import React from "react";
import Replays from "../repositories/ReplayRepository";


export default class ReplayDetailNavbar extends React.Component {

  static get propTypes () {
    return {
      replay: React.PropTypes.object.isRequired,
      activeSession: React.PropTypes.object.isRequired
    };
  }

  constructor () {

    super();

    this.handleDownloadClick = this.handleDownloadClick.bind(this);

  }

  render() {
    return (
      <ul className="nav navbar-nav navbar-right">
        <li>
          <a onClick={this.handleDownloadClick}>Download</a>
        </li>
      </ul>
    );
  }

  async _handleDownloadClick (event) {

    event.preventDefault();

    let source = await Replays.getDownloadSource(
      this.props.activeSession,
      this.props.replay.id
    );

    window.open(
      source.url,
      "_blank"
    );

  }

}
