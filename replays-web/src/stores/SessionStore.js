import { Store } from 'flummox';


export default class SessionStore extends Store {

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

    if (session != null) {
      try {

        // attempt to parse session body
        session = JSON.parse(session);

      } catch (err) {

        // we need to return null
        session = null;

        // clear whatever was in storage
        localStorage.removeItem("session");

      }
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
