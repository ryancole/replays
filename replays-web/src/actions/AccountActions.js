/**
 * Module dependencies
 */

import { Actions } from 'flummox';
import AccountRepository from '../repository/AccountRepository';
import SessionRepository from '../repository/SessionRepository';


class AccountActions extends Actions {

  async create (username, password) {
    AccountRepository.create(username, password).then((response) => {
      if (response.ok == true) {
        return SessionRepository.create(username, password);
      }
    });
  }

}


/**
 * Module exports
 */

export default AccountActions;
