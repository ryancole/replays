/**
 * Module dependencies
 */

import React from 'react';
import { Link } from 'react-router';


/**
 * Component definition
 */

class ReplayTableRow extends React.Component {

  render () {

    // replay meta data
    const replay = this.props.replay;

    // account username
    const username = this.props.username;

    return (
      <tr className="replayTableRow">
        <td>
          <Link to="replay" params={{
            username: username,
            id: replay._id
          }}>
            {replay.filename}
          </Link>
        </td>
        <td>
          {new Date(replay.dateCreated).toString()}
        </td>
      </tr>
    );

  }

}


/**
 * Module exports
 */

export default ReplayTableRow;
