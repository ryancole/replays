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
    this.register(accountActionIds.create, this._handleCreate);

  }

  _handleCreate (account) {
    console.log(account);
  }

}


/**
 * Module exports
 */

export default AccountStore;
