/**
 * Module dependencies
 */

import { Store } from 'flummox';
import { OrderedMap } from 'immutable';


/**
 * Store definition
 */

class ReplayStore extends Store {

  constructor (flux) {

    super();

    // fetch action ids
    const replayActionIds = flux.getActionIds('replays');

    // register action handlers
    this.register(replayActionIds.getAll, this._handleGetForAccountId);
    this.register(replayActionIds.getById, this._handleGetById);
    this.register(replayActionIds.getForAccountId, this._handleGetForAccountId);

    // set initial state
    this.state = {
      replays: OrderedMap()
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
      return replay.account_id == id;
    });
    return replays.toArray();
  }

  _handleGetById (replay) {

    let replays = this.state.replays.set(
      replay.id,
      replay
    );

    // update store state
    this.setState({
      replays: replays
    });

  }

  _handleGetForAccountId (replays) {

    // convert array of replays to map
    let hash = replays.reduce((prev, curr) => {
      return prev.set(curr.id, curr);
    }, OrderedMap());

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
