/**
 * Module dependencies
 */

import React from 'react';


/**
 * Components
 */

import ReplayListItem from './ReplayListItem';


/**
 * Component definition
 */

class ReplayList extends React.Component {
  render () {
    var replayNodes = this.props.replays.map(function (replay, index) {
      return (
        <ReplayListItem
          key={replay._id}
          replay={replay} />
      );
    });
    return (
      <ul className="replayList">
        {replayNodes}
      </ul>
    );
  }
}


/**
 * Module exports
 */

export default ReplayList;
