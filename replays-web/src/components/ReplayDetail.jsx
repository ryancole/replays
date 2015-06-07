/**
 * Module dependencies
 */

import React from 'react';


/**
 * Component definition
 */

class ReplayDetail extends React.Component {

  render () {
    let replay = this.props.replay;
    return (
      <dl className="dl-horizontal">
        <dt>Filename</dt>
        <dd>{replay.filename}</dd>
        <dt>Size</dt>
        <dd>{replay.awsSize} bytes</dd>
        <dt>Date Uploaded</dt>
        <dd>{replay.dateCreated.toString()}</dd>
        <dt>Identifier</dt>
        <dd>{replay._id}</dd>
      </dl>
    );
  }

}


/**
 * Module exports
 */

export default ReplayDetail;
