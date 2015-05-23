/**
 * Module dependencies
 */

import React from 'react';


/**
 * Component definition
 */

class AccountDetail extends React.Component {

  render () {

    let account = this.props.account;

    // check for availability
    if (this.props.account == null) {
      return <h2>Loading ...</h2>;
    }

    // render account details
    return (
      <div className="userDetail">
        <h1>{account.username} ({account._id})</h1>
      </div>
    );

  }

}


/**
 * Module exports
 */

export default AccountDetail;
