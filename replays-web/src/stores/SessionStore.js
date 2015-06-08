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
      activeSession: this._getStoredSession()
    };

  }

  get activeSession () {
    return this.state.activeSession;
  }

  get isAuthenticated () {
    return this.state.activeSession != null;
  }

  _getStoredSession () {

    // fetch previous active session
    let session = localStorage.getItem("session");

    // parse if available
    if (session != null) {
      session = JSON.parse(session);
    }

    // null if not available
    return session;

  }

  _handleSignout (session) {

    // clear persisted session
    localStorage.removeItem("session");

    // clear store state
    this.replaceState({
      activeSession: null
    });

  }

  _handleCreateSuccess (session) {

    // persist this session locally
    localStorage.setItem("session", JSON.stringify(session));

    // update store state
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
