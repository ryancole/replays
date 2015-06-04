/**
 * Module dependencies
 */

import { Actions } from 'flummox';
import Replays from '../repository/ReplayRepository';


class ReplayActions extends Actions {

  // get a single replay by id
  async getById (id) {
    return await Replays.getById(id);
  }

  // get a collection of replays keyed by id
  async getAllById (skip) {

    let replays = await Replays.getAllById(skip);

    replays = replays.map(function (replay) {
      replay.dateCreated = new Date(replay.dateCreated);
      return replay;
    });
    
    return {
      skip: skip,
      replays: replays
    };
    
  }

}


/**
 * Module exports
 */

export default ReplayActions;
