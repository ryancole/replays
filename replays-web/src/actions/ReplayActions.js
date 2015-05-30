/**
 * Module dependencies
 */

import { Actions } from 'flummox';
import Replays from '../repository/ReplayRepository';


class ReplayActions extends Actions {

  /**
   * get all replays
   */

  async getAll (skip) {
    return await Replays.getAll(skip);
  }

}


/**
 * Module exports
 */

export default ReplayActions;
