import { Flux } from 'flummox';
import ReplayStore from './stores/ReplayStore';
import ReplayActions from './actions/ReplayActions';

class ReplaysFlux extends Flux {
  constructor() {
    super();
    this.createActions('replays', ReplayActions);
    this.createStore('replays', ReplayStore, this);
  }
}

export default ReplaysFlux;