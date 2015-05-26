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
    const sessionActionIds = flux.getActionIds('sessions');

    // register action handlers
    this.register(sessionActionIds.create, this._handleCreate);

    // initial state
    this.state = {
      activeSession: null
    };

  }

  isAuthenticated () {
    return this.state.activeSession != null;
  }

  _handleCreate (session) {
    this.setState({
      activeSession: session
    });
  }

}


/**
 * Module exports
 */

export default SessionStore;
