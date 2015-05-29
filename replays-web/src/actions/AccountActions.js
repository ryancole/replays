/**
 * Module dependencies
 */

import { Actions } from 'flummox';
import AccountRepository from '../repository/AccountRepository';
import SessionRepository from '../repository/SessionRepository';


class AccountActions extends Actions {

  async create (username, password) {
    let foo = await AccountRepository.create(username, password);
    if (foo.ok == true) {
      return await SessionRepository.create(username, password);
    }
  }

}


/**
 * Module exports
 */

export default AccountActions;
