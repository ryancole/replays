import React from 'react';
import { Link } from 'react-router';


export default class ReplayTableRow extends React.Component {

  render () {

    const replay = this.props.replay;

    return (
      <tr className="replayTableRow">
        <td>
          <Link to="replay" params={{
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

}