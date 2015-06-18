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
        <dd>{replay.size} bytes</dd>
        <dt>Date Uploaded</dt>
        <dd>{replay.date_created}</dd>
        <dt>Uploaded By</dt>
        <dd>
          <Link to="account" params={{username: account.username}}>
            {account.username}
          </Link>
        </dd>
      </dl>
    );
  }

}


/**
 * Module exports
 */

export default ReplayDetail;
