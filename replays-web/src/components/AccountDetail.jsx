/**
 * Module dependencies
 */

import React from 'react';


/**
 * Component definition
 */

class AccountDetail extends React.Component {

  constructor () {
    super();
    this.state = {
      account: null
    };
  }

  componentDidMount () {

    let actions = this.props.flux.getActions('accounts');

    // the requested username
    let username = this.props.params.username;

    // fetch the requested account
    actions.getByUsername(username);

  }

  render () {
    if (this.state.account != null) {
      let account = this.state.account;
      return (
        <div className="userDetail">
          <h1>{account.username} ({account._id})</h1>
        </div>
      );
    }
    return false;
  }

}


/**
 * Module exports
 */

export default AccountDetail;