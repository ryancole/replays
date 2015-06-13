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
        <dt>Member Since</dt>
        <dd>{this.props.account.create_date}</dd>
      </dl>
    );
  }

}


/**
 * Module exports
 */

export default AccountDetail;
