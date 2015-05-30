/**
 * Module dependencies
 */

import { Actions } from 'flummox';
import SessionRepository from '../repository/SessionRepository';


class SessionActions extends Actions {

  async create (username, password) {
    return await SessionRepository.create(username, password);
  }

  signout () {
    return null;
  }

}


/**
 * Module exports
 */

export default SessionActions;
