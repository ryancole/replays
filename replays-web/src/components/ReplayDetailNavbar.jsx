import React from 'react';
import settings from '../../settings';


export default class ReplayDetailNavbar extends React.Component {

  render() {

    const source = `${settings.DOWNLOAD_PREFIX}/${this.props.replay.aws_key}`;

    return (
      <ul className="nav navbar-nav navbar-right">
        <li>
          <a target="_blank" href={source}>Download</a>
        </li>
      </ul>
    );
  }

}
