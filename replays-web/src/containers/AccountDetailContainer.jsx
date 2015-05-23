/**
 * Module dependencies
 */

import React from 'react';
import connectToStores from 'flummox/connect';


/**
 * Components
 */

import AccountDetail from '../components/AccountDetail';


/**
 * Component definition
 */

class AccountDetailContainer extends React.Component {

  componentDidMount () {

    let actions = this.props.flux.getActions('accounts');

    // fetch the requested account
    actions.getByUsername(this.props.params.username);

  }

  render () {
    return (
      <AccountDetail account={this.props.account} />
    );
  }

}

AccountDetailContainer = connectToStores(AccountDetailContainer, {
  accounts: store => ({
    account: store.getAccount()
  })
});


/**
 * Module exports
 */

export default AccountDetailContainer;
