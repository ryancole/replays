/**
 * Module dependencies
 */

import { Actions } from 'flummox';
import Replays from '../repository/ReplayRepository';


class ReplayActions extends Actions {

  async getForAccountId (id) {

    // fetch replays for an account
    let response = await Replays.getByAccountId(id);
    
    // dispatch the replays
    return response;

  }

  async getForAccountView (token) {

    // fetch replays for an account, using the
    // current active user's token
    let response = await Replays.forOwner(token);
    
    // dispatch the replays
    return response.replays;

  }

}


/**
 * Module exports
 */

export default ReplayActions;
