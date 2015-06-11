import React from 'react';
import FluxComponent from 'flummox/component';
import { RouteHandler } from 'react-router';


class AccountView extends React.Component {

  render () {

    const account = this.props.account;

    if (account == null) {
      return null;
    }

    return (
      <RouteHandler
        flux={this.props.flux}
        account={account} />
    );

  }

}

export default class AccountViewWrapper extends React.Component {

  render () {
    return (
      <FluxComponent connectToStores={{
        accounts: store => ({
          account: store.getByUsername(this.props.params.username)
        })
      }}>
        <AccountView />
      </FluxComponent>
    );
  }

  componentDidMount () {

    // trigger the fetch account detail action
    this._fetchAccount(this.props.params.username);

  }

  _fetchAccount (username) {

    const store = this.props.flux.getStore('accounts');

    // check store for the account
    if (store.hasAccount(username) == false) {

      const actions = this.props.flux.getActions('accounts');

      // store needs the account
      actions.getByUsername(username);

    }

  }

}
