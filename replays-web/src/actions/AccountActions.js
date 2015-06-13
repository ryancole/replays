/**
 * Module dependencies
 */

import { Actions } from 'flummox';
import ReplayRepository from '../repository/ReplayRepository';
import AccountRepository from '../repository/AccountRepository';
import SessionRepository from '../repository/SessionRepository';


class AccountActions extends Actions {

  // create a new account and respond
  // with a session for that account
  async create (username, password) {

    // create the account
    let account = await AccountRepository.create(username, password);

    if (account.id > 0) {

      // create a session for the account
      return await SessionRepository.create(username, password);

    }

  }

  // get account details
  async getByUsername (username) {

    // fetch the account
    let account = await AccountRepository.getByUsername(username);

    // dispatch account
    return account;

  }

}


/**
 * Module exports
 */

export default AccountActions;
