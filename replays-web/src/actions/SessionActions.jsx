import { Actions } from 'flummox';
import Sessions from '../repository/SessionRepository';


export default class SessionActions extends Actions {

  /**
   * fetch a new session
   */

  async create (username, password) {

    // fetch a session token
    let session = await Sessions.create(username, password);

    // dispatch session token
    return session.token;

  }


  /**
   * kill the current session
   */

  signout () {

    return null;
    
  }

}
