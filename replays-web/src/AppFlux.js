/**
 * Module dependencies
 */

import { Flux } from 'flummox';
import ReplayStore from './stores/ReplayStore';
import ReplayActions from './actions/ReplayActions';
import AccountStore from './stores/AccountStore';
import AccountActions from './actions/AccountActions';


/**
 * Define the flux application
 */

class AppFlux extends Flux {

  constructor() {

    super();

    // actions
    this.createActions('replays', ReplayActions);
    this.createActions('accounts', AccountActions);

    // stores
    this.createStore('replays', ReplayStore, this);
    this.createStore('accounts', AccountStore, this);
    
  }
  
}

/**
 * Module exports
 */

export default AppFlux;
