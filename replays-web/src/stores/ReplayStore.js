import { Store } from 'flummox';
import { OrderedMap } from 'immutable';


export default class ReplayStore extends Store {

  constructor (flux) {

    super();

    // fetch action ids
    const replayActionIds = flux.getActionIds('replays');

    // register action handlers
    this.register(replayActionIds.getByActiveSession, this._handleGetByActiveSession);

    // set initial state
    this.state = {
      replays: OrderedMap()
    };

  }

  getAll () {
    return this.state.replays.toArray();
  }

  _handleGetByActiveSession (replays) {

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
