import React from 'react';
import FluxComponent from 'flummox/component';
import ReplayTable from '../components/ReplayTable';
import AccountDetail from '../components/AccountDetail';
import SectionNavbar from '../components/SectionNavbar';
import ReplayHomeNavbar from '../components/ReplayHomeNavbar';


class AccountDetailView extends React.Component {

  render () {

    // the account to view
    const account = this.props.account;

    // default navbar
    let navbar = (
      <SectionNavbar
        label={account.username} />
    );

    // navbar for account owner
    if (this.props.isAccountOwner == true) {
      navbar = (
        <SectionNavbar label={account.username}>
          <ReplayHomeNavbar />
        </SectionNavbar>
      );
    }

    return (
      <div>
        <div className="row">
          <div className="col-sm-12">
            {navbar}
          </div>
        </div>
        <div className="row">
          <div className="col-sm-12">
            <AccountDetail
              account={account} />
          </div>
        </div>
        <div className="row">
          <div className="col-sm-12">
            <ReplayTable 
              replays={this.props.replays} />
          </div>
        </div>
      </div>
    );

  }

}

export default class AccountDetailViewWrapper extends React.Component {

  render () {
    return (
      <FluxComponent connectToStores={{
        replays: store => ({
          replays: store.getByAccountId(this.props.account.id)
        })
      }}>
        <AccountDetailView
          account={this.props.account}
          isAccountOwner={this.props.isAccountOwner} />
      </FluxComponent>
    );
  }

  componentDidMount () {

    // trigger the fetch replay action
    setTimeout(() => {
      this._fetchReplays(this.props.account.id);
    });

  }

  _fetchReplays (id) {

    const actions = this.props.flux.getActions('replays');

    // store needs the replays
    actions.getForAccountId(id);

  }

}
