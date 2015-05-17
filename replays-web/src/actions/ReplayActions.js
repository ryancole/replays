/**
 * Module dependencies
 */

import { Actions } from 'flummox';

/**
 * Create new set of `ReplayActions`
 */

class ReplayActions extends Actions {

  /**
   * @param {String} filename
   * @returns {String}
   */

  create (filename) {
    return filename;
  }

}

/**
 * Expose `ReplayActions`
 */

export default ReplayActions;
