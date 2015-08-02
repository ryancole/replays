import React from "react";
import Replays from "../repositories/ReplayRepository";
import Settings from "../../dank.config";


export default class ReplayDetailNavbar extends React.Component {

  static get propTypes () {
    return {
      replay: React.PropTypes.object.isRequired,
      activeSession: React.PropTypes.object
    };
  }

  constructor () {
    super();
    this.handleDownloadClick = this.handleDownloadClick.bind(this);
  }

  render() {

    // default to the public and direct aws
    // download url
    let link = (
      <a target="_blank" href={`${Settings.DOWNLOAD_PREFIX}/${this.props.replay.awsKey}`}>
        Download
      </a>
    );

    // private replays need pre-signed donwload
    // links, so wire up the handler if needed
    if (this.props.replay.public !== true) {
      link = (
        <a onClick={this.handleDownloadClick}>
          Download
        </a>
      );
    }

    return (
      <ul className="nav navbar-nav navbar-right">
        <li>
          {link}
        </li>
      </ul>
    );

  }

  async handleDownloadClick (event) {

    event.preventDefault();

    // fetch the pre-signed download link for
    // the current replay file
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
