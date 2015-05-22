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
    this.register(accountActionIds.getByUsername, this._handleGetByUsername);

    // set initial state
    this.state = {
      account: null
    };

  }

  _handleGetByUsername (account) {
    this.setState({
      account: account
    })
  }

}


/**
 * Module exports
 */

export default AccountStore;
