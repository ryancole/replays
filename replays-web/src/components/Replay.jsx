/**
 * Module dependencies
 */

import React from 'react';


/**
 * Component definition
 */

class Replay extends React.Component {
  render () {
    return (
      <div className="replay">
        <h2 className="replayFilename">
          {this.props.filename}
        </h2>
        {this.props.children}
      </div>
    );
  }
}


/**
 * Module exports
 */

export default Replay;