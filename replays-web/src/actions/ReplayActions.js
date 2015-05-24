/**
 * Module dependencies
 */

import { Actions } from 'flummox';
import * as Replays from '../repository/ReplayRepository';


/**
 * Actions definition
 */

class ReplayActions extends Actions {

  async create (replay) {
    try {
      return await Replays.create(replay);
    } catch (err) {
      console.log(err);
    }
  }

  async getAll () {
    try {
      return await Replays.getAll();
    } catch (err) {
      console.log(err);
    }
  }

  async sign (file) {
    try {
      return await Replays.sign(file);
    } catch (err) {
      console.log(err);
    }
  }

}


/**
 * Module exports
 */

export default ReplayActions;
