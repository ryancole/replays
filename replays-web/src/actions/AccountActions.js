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

    if (account.ok == true) {

      // create a session for the account
      return await SessionRepository.create(username, password);

    }

  }

  // get account details for the account view
  async getForAccountView (username) {

    // fetch the account
    let account = await AccountRepository.getByUsername(username);

    // fetch replays for the account
    let replays = await ReplayRepository.getByAccountId(account._id);
    
    // dispatch account and replay information
    return {
      account: account,
      replays: replays.replays
    };

  }

}


/**
 * Module exports
 */

export default AccountActions;
