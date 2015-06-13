/**
 * Module dependencies
 */

import { Actions } from 'flummox';
import Replays from '../repository/ReplayRepository';


class ReplayActions extends Actions {

  async getAll () {

    // fetch replays
    let replays = await Replays.getAll();

    // dispatch the replays
    return replays.replays;

  }

  async getById (id) {

    // fetch replay
    let replay = await Replays.getById(id);

    // dispatch the replay
    return replay;

  }

  async getForAccountId (id) {

    // fetch replays for an account
    let response = await Replays.getByAccountId(id);

    // dispatch the replays
    return response.replays;

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
