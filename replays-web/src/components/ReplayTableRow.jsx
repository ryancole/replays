import React from 'react';
import { Link } from 'react-router';


export default class ReplayTableRow extends React.Component {

  render () {

    const replay = this.props.replay;

    if (this.props.isAccountOwner == true) {
      return (
        <tr className="replayTableRow">
          <td>
            <Link to="replay" params={{
              username: replay.username,
              id: replay.id
            }}>
              {replay.filename}
            </Link>
          </td>
          <td>
            {replay.date_created}
          </td>
        </tr>
      );
    }

    return (
      <tr className="replayTableRow">
        <td>
          <Link to="replay" params={{
            username: replay.username,
            id: replay.id
          }}>
            {replay.filename}
          </Link>
        </td>
        <td>
          <Link to="account" params={{
            username: replay.username
          }}>
            {replay.username}
          </Link>
        </td>
        <td>
          {replay.date_created}
        </td>
      </tr>
    );

  }

}