/**
 * Module dependencies
 */

import React from 'react';
import { Link } from 'react-router';


/**
 * Component definition
 */

class ReplayListItem extends React.Component {

  render () {
    const replay = this.props.replay;
    return (
      <li className="replayListItem">
        <h2>
          <Link to="replay-detail" params={{ id: replay._id }}>
            {replay.filename}
          </Link>
          <small>{replay.dateCreated}</small>
        </h2>
        <p>{replay.description}</p>
      </li>
    );
  }

}


/**
 * Module exports
 */

export default ReplayListItem;
