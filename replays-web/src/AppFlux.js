/**
 * Module dependencies
 */

import { Flux } from 'flummox';
import ReplayStore from './stores/ReplayStore';
import ReplayActions from './actions/ReplayActions';

/**
 * Define the flux application
 */

class AppFlux extends Flux {

  constructor() {
    super();

    // actions
    this.createActions('replays', ReplayActions);

    // stores
    this.createStore('replays', ReplayStore, this);
  }
  
}

/**
 * Module exports
 */

export default AppFlux;