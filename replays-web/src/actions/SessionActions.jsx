/**
 * Module dependencies
 */

import { Actions } from 'flummox';
import SessionRepository from '../repository/SessionRepository';


class SessionActions extends Actions {

  async create (username, password) {

    // fetch a session token
    let session = await SessionRepository.create(username, password);

    // dispatch session token
    return session;

  }

  signout () {
    return null;
  }

}


/**
 * Module exports
 */

export default SessionActions;
