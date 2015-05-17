/**
 * Module dependencies
 */

import Immutable from 'immutable';
import { Store } from 'flummox';

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
      replays: Immutable.Map()
    };

    // get action ids
    let replayActionIds = flux.getActionIds('replays');

    // register action handlers
    this.register(replayActionIds.create, this.handleCreate);

  }

  /**
   * @param {String} text
   */

  handleCreate (filename) {

    const replay = new Replay({
      filename: filename
    });

    this.setState({
      replays: this.state.replays.set(filename, replay)
    });

  }

}

/**
 * Expose `ReplayStore`
 */

export default ReplayStore;
