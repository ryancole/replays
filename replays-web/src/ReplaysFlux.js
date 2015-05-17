import { Flux } from 'flummox';
import ReplayStore from './stores/ReplayStore';
import ReplayActions from './actions/ReplayActions';

class ReplaysFlux extends Flux {
  constructor() {
    super();
    this.createStore('replays', ReplayStore, this);
    this.createActions('replays', ReplayActions);
  }
}

export default ReplaysFlux;