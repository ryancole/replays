import { Map } from 'immutable';
import { Store } from 'flummox';


export default class AccountStore extends Store {

  constructor (flux) {

    super();

    // fetch action ids
    const accountActionIds = flux.getActionIds('accounts');

    // register action handlers
    this.register(accountActionIds.getByActiveSession, this._handleGetByActiveSession);

    // initial state
    this.state = {
      accounts: Map()
    };

  }

  getById (id) {
    return this.state.accounts.get(id);
  }

  hasAccount (id) {
    return this.state.accounts.has(id);
  }

  _handleGetByActiveSession (account) {

    // account map with new account
    let accounts = this.state.accounts.set(
      account.id,
      account
    );

    // update store state
    this.setState({
      accounts: accounts
    });
    
  }

}
