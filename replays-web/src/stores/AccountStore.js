/**
 * Module dependencies
 */

import { Map } from 'immutable';
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
    this.register(accountActionIds.getByUsername, this._handleGetByUsername);

    // initial state
    this.state = {
      accounts: Map()
    };

  }

  hasAccount (username) {
    return this.state.accounts.has(username.toLowerCase());
  }

  getByUsername (username) {
    return this.state.accounts.get(username.toLowerCase());
  }

  _handleGetByUsername (account) {

    // account map with new account
    let accounts = this.state.accounts.set(
      account.username.toLowerCase(),
      account
    );

    // update store state
    this.setState({
      accounts: accounts
    });
    
  }

}


/**
 * Module exports
 */

export default AccountStore;
