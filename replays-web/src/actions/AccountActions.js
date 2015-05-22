/**
 * Module dependencies
 */

import { Actions } from 'flummox';
import * as Accounts from '../repository/AccountRepository';


/**
 * Actions definition
 */

class AccountActions extends Actions {

  async getByUsername (username) {
    try {
      return await Accounts.getByUsername(username);
    } catch (err) {
      console.log(err);
    }
  }

}


/**
 * Module exports
 */

export default AccountActions;
