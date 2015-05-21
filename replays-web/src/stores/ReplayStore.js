/**
 * Module dependencies
 */

import { Store } from 'flummox';


/**
 * Store definition
 */

class ReplayStore extends Store {

  constructor (flux) {

    super();

    // fetch action ids
    const replayActionIds = flux.getActionIds('replays');

    // register action handlers
    this.register(replayActionIds.create, this._handleCreate);
    this.register(replayActionIds.getAll, this._handleGetAll);

    // set initial state
    this.state = {
      replays: []
    };

  }

  _handleCreate (replay) {
    this.setState({
      replays: this.state.replays.concat([replay])
    });
  }

  _handleGetAll (replays) {
    this.setState({
      replays: replays
    });
  }

}


/**
 * Module exports
 */

export default ReplayStore;
