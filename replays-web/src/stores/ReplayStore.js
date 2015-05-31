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
    this.register(replayActionIds.getById, this._handleGetById);
    this.register(replayActionIds.getAllById, this._handleGetAllById);

    // set initial state
    this.state = {
      skipped: 0,
      replaysById: [],
      specificReplay: null
    };

  }

  get replaysById () {
    return this.state.replaysById;
  }

  get specificReplay () {
    return this.state.specificReplay;
  }

  _handleGetById (replay) {
    this.setState({
      specificReplay: replay
    });
  }

  _handleGetAllById (data) {
    this.setState({
      skipped: data.skip,
      replaysById: data.replays
    });
  }

}


/**
 * Module exports
 */

export default ReplayStore;
