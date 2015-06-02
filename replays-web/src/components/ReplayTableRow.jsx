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

    const replay = this.props.replay;

    return (
      <tr className="replayTableRow">
        <td>
          <Link to="replay-detail" params={{ id: replay._id }}>
            {replay.filename}
          </Link>
        </td>
        <td>
          {replay.dateCreated}
        </td>
      </tr>
    );

  }

}


/**
 * Module exports
 */

export default ReplayTableRow;
