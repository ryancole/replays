/**
 * Module dependencies
 */

import React from 'react';


/**
 * Component definition
 */ 

class AccountDetail extends React.Component {

  render() {
    return (
      <dl className="dl-horizontal">
        <dt>Username</dt>
        <dd>{this.props.account.username}</dd>
        <dt>Member Since</dt>
        <dd>{this.props.account.dateCreated}</dd>
      </dl>
    );
  }

}


/**
 * Module exports
 */

export default AccountDetail;
