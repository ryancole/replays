/**
 * Module dependencies
 */

import { Store } from 'flummox';


/**
 * Store definition
 */

class AccountStore extends Store {

  constructor (flux) {

    super();

    // fetch action ids
    const accountActionIds = flux.getActionIds('accounts');

    // register action handlers
    this.register(accountActionIds.getForAccountView, this._handleGetForAccountView);

    // initial state
    this.state = {
      accountsForAccountView: {}
    };

  }

  getByUsername (username) {

    // get the specific account
    return this.state.accountsForAccountView[username.toLowerCase()];

  }

  _handleGetForAccountView (data) {

    let account = data.account;

    // get the current account collection
    let accounts = this.state.accountsForAccountView;

    // set this account's details
    accounts[account.username.toLowerCase()] = account;

    // update store state
    this.setState({
      accountForAccountView: accounts
    });

  }

}


/**
 * Module exports
 */

export default AccountStore;
