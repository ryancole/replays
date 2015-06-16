import React from 'react';
import { Link } from 'react-router';


export default class ReplayTableRow extends React.Component {

  render () {

    const replay = this.props.replay;

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
          {replay.create_date}
        </td>
      </tr>
    );

  }

}