/**
 * Module dependencies
 */

import React from 'react';


/**
 * Component definition
 */

class ReplayDetail extends React.Component {

  render () {
    return (
      <div className="replayDetail">
        <h2>
          {this.props.replay.filename}
          <small>{this.props.replay.dateCreated}</small>
        </h2>
        <p>{this.props.replay.description}</p>
      </div>
    );
  }

}


/**
 * Module exports
 */

export default ReplayDetail;
