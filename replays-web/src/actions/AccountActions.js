import 'whatwg-fetch';
import Settings from '../../dank.config';
import { REPLAY_MERGE } from '../constants/ActionTypes';


export function createAccount (username, password) {
  return dispatch => {
    fetch(`${Settings.API_ADDR}/account`, {
      method: 'post',
      body: {
        username: username,
        password: password
      }
    })
    .then(response => response.json())
    .then(response => dispatch({
      type: ACCOUNT_SET
    }));
  };
};


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
      let session = await Sessions.create(username, password);

      // dispatch the session token
      return session.token;

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
