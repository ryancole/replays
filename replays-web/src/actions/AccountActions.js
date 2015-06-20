/**
 * Module dependencies
 */

import { Actions } from 'flummox';
import Accounts from '../repository/AccountRepository';
import Sessions from '../repository/SessionRepository';


class AccountActions extends Actions {

  // create a new account and respond
  // with a session for that account
  async create (username, password) {

    // create the account
    let account = await Accounts.create(username, password);

    if (account.id > 0) {

      // create a session for the account
      return await Sessions.create(username, password);

    }

  }

  async getByActiveSession (session) {
    return await Accounts.getByActiveSession(session);
  }

}


/**
 * Module exports
 */

export default AccountActions;
