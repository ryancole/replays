/**
 * Module dependencies
 */

import { Actions } from 'flummox';
import AccountRepository from '../repository/AccountRepository';


class AccountActions extends Actions {

  async create (username, password) {
    return await AccountRepository.create(username, password);
  }

}


/**
 * Module exports
 */

export default AccountActions;
