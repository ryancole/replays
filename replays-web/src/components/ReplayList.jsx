/**
 * Module dependencies
 */

import React from 'react';


/**
 * Components
 */

import Replay from './Replay';


/**
 * Component definition
 */

class ReplayList extends React.Component {
  render () {
    var replayNodes = this.props.data.map(function (replay, index) {
      return (
        <Replay key={index} filename={replay.filename}>
          {replay.description}
        </Replay>
      );
    });
    return (
      <div className="replayList">
        {replayNodes}
      </div>
    );
  }
}


/**
 * Module exports
 */

export default ReplayList;