/**
 * Module dependencies
 */

import { Actions } from 'flummox';
import AccountRepository from '../repository/AccountRepository';
import SessionRepository from '../repository/SessionRepository';


class AccountActions extends Actions {

  // create a new account and respond
  // with a session for that account
  async create (username, password) {

    // create the account
    let account = await AccountRepository.create(username, password);

    if (account.ok == true) {

      // create a session for the account
      return await SessionRepository.create(username, password);

    }

  }

  // get account details for the account view
  async getForAccountView (username) {

    // fetch the account
    let account = await AccountRepository.getByUsername(username);
    
    // dispatch account to store
    return account;

  }

}


/**
 * Module exports
 */

export default AccountActions;
