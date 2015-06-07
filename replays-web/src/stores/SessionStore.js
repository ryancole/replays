/**
 * Module dependencies
 */

import { Store } from 'flummox';


/**
 * Store definition
 */

class SessionStore extends Store {

  constructor (flux) {

    super();

    // fetch action ids
    const accountActionIds = flux.getActionIds('accounts');
    const sessionActionIds = flux.getActionIds('sessions');

    // register action handlers
    this.register(sessionActionIds.signout, this._handleSignout);
    this.registerAsync(accountActionIds.create, null, this._handleCreateSuccess, this._handleCreateFailure);
    this.registerAsync(sessionActionIds.create, null, this._handleCreateSuccess, this._handleCreateFailure);

    // initialize state
    this.state = {
      activeSession: null
    };

  }

  get activeSession () {
    return this.state.activeSession;
  }

  get isAuthenticated () {
    return this.state.activeSession != null;
  }

  _handleSignout (session) {
    this.replaceState({
      activeSession: null
    });
  }

  _handleCreateSuccess (session) {
    this.setState({
      activeSession: session
    });
  }

  _handleCreateFailure (error) {
    console.log(error);
  }

}


/**
 * Module exports
 */

export default SessionStore;
