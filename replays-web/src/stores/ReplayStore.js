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
    this.register(replayActionIds.getForAccountId, this._handleGetForAccountId);

    // set initial state
    this.state = {
      replays: Map()
    };

  }

  hasReplay (id) {
    return this.state.replays.has(id);
  }

  getAll () {
    return this.state.replays.toArray();
  }

  getById (id) {
    return this.state.replays.get(id);
  }

  getByAccountId (id) {
    let replays = this.state.replays.filter(replay => {
      return replay.accountId == id;
    });
    return replays.toArray();
  }

  _handleGetForAccountId (replays) {

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
