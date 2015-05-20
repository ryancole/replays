/**
 * Module dependencies
 */

import { Store } from 'flummox';
import Immutable from 'immutable';

const Replay = Immutable.Record({
  filename: null
});

/**
 * Create new `ReplayStore`
 */

class ReplayStore extends Store {

  /**
   * @param {Object} flux instance
   */

  constructor (flux) {

    super();

    // initial state
    this.state = {
      replays: Immutable.List([
        {filename: "lol"}
      ])
    };

  }

  /**
   * @returns {Immutable.List}
   */

  getAll() {
    return this.state.replays;
  }

}

/**
 * Module exports
 */

export default ReplayStore;
