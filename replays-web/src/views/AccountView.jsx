/**
 * Module dependencies
 */

import React from 'react';
import FluxComponent from 'flummox/component';


/**
 * Components
 */

import ReplayTable from '../components/ReplayTable';
import AccountDetail from '../components/AccountDetail';
import SectionNavbar from '../components/SectionNavbar';


class AccountView extends React.Component {

  render () {

    if (this.props.account == null) {
      return false;
    }

    return (
      <div>
        <div className="row">
          <div className="col-sm-12">

            <SectionNavbar
              label={this.props.account.username} />

          </div>
        </div>
        <div className="row">
          <div className="col-sm-12">

            <AccountDetail
              account={this.props.account} />

          </div>
        </div>
        <div className="row">
          <div className="col-sm-12">

            <FluxComponent connectToStores={{
              replays: store => ({
                replays: store.getByAccountId(this.props.account._id)
              })
            }}>
              <ReplayTable />
            </FluxComponent>

          </div>
        </div>
      </div>
    );

  }

}

class AccountViewWrapper extends React.Component {

  render () {
    return (
      <div>
        <FluxComponent connectToStores={{
          accounts: store => ({
            account: store.getByUsername(this.props.params.username)
          })
        }}>
          <AccountView />
        </FluxComponent>
      </div>
    );
  }

  componentDidMount () {

    // trigger the fetch account detail action
    this._fetchAccount(this.props.params.username);

  }

  _fetchAccount (username) {

    let store = this.props.flux.getStore('accounts');

    // check store for the account
    if (store.getByUsername(username) == null) {

      let actions = this.props.flux.getActions('accounts');

      // store needs the account
      actions.getForAccountView(username);

    }

  }

}


/**
 * Module exports
 */

export default AccountViewWrapper;
