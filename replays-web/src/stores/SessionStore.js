import jwt from 'jsonwebtoken';

function sessions (state = [], action) {

  switch (action.type) {

    default:
      return state;

  }

};

export default sessions;


class SessionStore extends Store {

  constructor (flux) {

    super();

    // fetch action ids
    const accountActionIds = flux.getActionIds('accounts');
    const sessionActionIds = flux.getActionIds('sessions');

    // register action handlers
    this.register(sessionActionIds.signout, this._handleSignout);
    this.register(sessionActionIds.create, this._handleCreateSuccess);
    this.register(accountActionIds.create, this._handleCreateSuccess);

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
    let session = localStorage.getItem("dank");

    if (session != null) {
      try {

        // attempt to parse session body
        session = JSON.parse(session);

        // check for expired session
        if (session.details.exp < Math.floor(Date.now() / 1000)) {

          // we need to return null
          session = null;

          // clear whatever was in storage
          localStorage.removeItem("dank");

        }

      } catch (err) {

        // we need to return null
        session = null;

        // clear whatever was in storage
        localStorage.removeItem("dank");

      }
    }

    // null if not available
    return session;

  }

  _handleSignout (session) {

    // clear persisted session
    localStorage.removeItem("dank");

    // clear store state
    this.replaceState({
      activeSession: null
    });

  }

  _handleCreateSuccess (token) {

    // decode the token
    const payload = jwt.decode(token);

    // include both token and payload
    // in the session data
    const session = {
      token: token,
      details: payload
    };

    // persist this token
    localStorage.setItem("dank", JSON.stringify(session));

    // update store state
    this.setState({
      activeSession: session
    });

  }

}

export default SessionStore;