import React from 'react';
import Replays from '../repository/ReplayRepository';
import settings from '../../settings';


export default class ReplayDetailNavbar extends React.Component {

  constructor () {

    super();

    this._handleDownloadClick = this._handleDownloadClick.bind(this);

  }

  render() {
    return (
      <ul className="nav navbar-nav navbar-right">
        <li>
          <a onClick={this._handleDownloadClick}>Download</a>
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
