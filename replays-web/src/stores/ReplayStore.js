/**
 * Module dependencies
 */

import { Map } from 'immutable';
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
    this.register(replayActionIds.getForAccountId, this._handleGet);
    this.register(replayActionIds.getForAccountView, this._handleGet);

    // set initial state
    this.state = {
      replays: Map()
    };

  }

  getAll () {
    return this.state.replays;
  }

  getByAccountId (id) {
    return this.state.replays.filter(replay => {
      return replay.accountId == id;
    });
  }

  _handleGet (replays) {

    // convert array of replays to map
    let hash = replays.reduce((prev, curr) => {
      return prev.set(curr._id, curr);
    }, Map());

    // update store state
    this.setState({
      replays: this.state.replays.merge(hash)
    });

  }

}


/**
 * Module exports
 */

export default ReplayStore;
