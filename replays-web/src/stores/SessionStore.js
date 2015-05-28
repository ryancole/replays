/**
 * Module dependencies
 */

import { Store } from 'flummox';
import jwt_decode from 'jwt-decode';


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
    this.register(accountActionIds.create, this._handleCreate);
    this.register(sessionActionIds.create, this._handleCreate);

    // initial state
    this.state = {
      activeSession: null
    };

  }

  isAuthenticated () {
    return this.state.activeSession != null;
  }

  _handleSessionCreate (session) {
    console.log(session);
    this.setState({
      activeSession: jwt_decode(session.token)
    });
  }

}


/**
 * Module exports
 */

export default SessionStore;
