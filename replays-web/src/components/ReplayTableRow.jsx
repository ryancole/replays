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
          {replay.filename}
        </td>
        <td>
          {replay.dateCreated.toString()}
        </td>
      </tr>
    );

  }

}


/**
 * Module exports
 */

export default ReplayTableRow;
