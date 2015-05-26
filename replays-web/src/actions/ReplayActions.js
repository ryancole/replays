/**
 * Module dependencies
 */

import { Actions } from 'flummox';
import Replays from '../repository/ReplayRepository';


class ReplayActions extends Actions {

  /**
   * get all replays
   */

  async getAll () {
    return await Replays.getAll();
  }

}


/**
 * Module exports
 */

export default ReplayActions;
