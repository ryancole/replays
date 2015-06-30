import { Store } from 'flummox';
import { OrderedMap } from 'immutable';


export default class ReplayStore extends Store {

  constructor (flux) {

    super();

    // fetch action ids
    const replayActionIds = flux.getActionIds('replays');

    // register action handlers
    this.register(replayActionIds.remove, this._handleRemove);
    this.register(replayActionIds.getAll, this._handleGetAll);
    this.register(replayActionIds.getById, this._handleGetById);

    // set initial state
    this.state = {
      replays: OrderedMap()
    };

  }

  has (id) {
    return this.state.replays.has(id);
  }

  get (id) {
    return this.state.replays.get(id);
  }

  getAll () {
    return this.state.replays.toArray();
  }

  _handleRemove (result) {
    if (result.success == true) {
      this.setState({
        replays: this.state.replays.delete(result.id)
      });
    }
  }

  _handleGetAll (replays) {

    // convert array of replays to map
    let hash = replays.reduce((prev, curr) => {
      return prev.set(curr.id, curr);
    }, OrderedMap());

    // update store state
    this.setState({
      replays: this.state.replays.merge(hash)
    });

  }

  _handleGetById (replay) {
    this.setState({
      replays: this.state.replays.set(
        replay.id,
        replay
      )
    });
  }

}
