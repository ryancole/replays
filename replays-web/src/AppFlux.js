/**
 * Module dependencies
 */

import { Flux } from 'flummox';

import ReplayStore from './stores/ReplayStore';
import ReplayActions from './actions/ReplayActions';

import AccountStore from './stores/AccountStore';
import AccountActions from './actions/AccountActions';

import SessionStore from './stores/SessionStore';
import SessionActions from './actions/SessionActions';


/**
 * Define the flux application
 */

class AppFlux extends Flux {

  constructor() {

    super();

    // actions
    this.createActions('replays', ReplayActions);
    this.createActions('accounts', AccountActions);
    this.createActions('sessions', SessionActions);

    // stores
    this.createStore('replays', ReplayStore, this);
    this.createStore('accounts', AccountStore, this);
    this.createStore('sessions', SessionStore, this);
    
  }
  
}

/**
 * Module exports
 */

export default AppFlux;
