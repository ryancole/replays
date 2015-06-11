/**
 * Module dependencies
 */

import React from 'react';
import { Link } from 'react-router';


/**
 * Component definition
 */

class ReplayDetail extends React.Component {

  render () {

    const { replay, account } = this.props;

    return (
      <dl className="dl-horizontal">
        <dt>Filename</dt>
        <dd>{replay.filename}</dd>
        <dt>Size</dt>
        <dd>{replay.awsSize} bytes</dd>
        <dt>Date Uploaded</dt>
        <dd>{new Date(replay.dateCreated).toString()}</dd>
        <dt>Upload By</dt>
        <dd>
          <Link to="account" params={{username: account.username}}>
            {account.username}
          </Link>
        </dd>
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
