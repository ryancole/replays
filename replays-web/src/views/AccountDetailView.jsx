import React from 'react';
import FluxComponent from 'flummox/component';
import ReplayTable from '../components/ReplayTable';
import AccountDetail from '../components/AccountDetail';
import SectionNavbar from '../components/SectionNavbar';


class AccountDetailView extends React.Component {

  render () {

    const account = this.props.account;

    return (
      <div>
        <div className="row">
          <div className="col-sm-12">
            <SectionNavbar
              label={account.username} />
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
      <div>
        <FluxComponent connectToStores={{
          replays: store => ({
            replays: store.getByAccountId(this.props.account._id)
          })
        }}>
          <AccountDetailView
            account={this.props.account} />
        </FluxComponent>
      </div>
    );
  }

  componentDidMount () {

    // trigger the fetch replay action
    setTimeout(() => {
      this._fetchReplays(this.props.account._id);
    });

  }

  _fetchReplays (id) {

    const actions = this.props.flux.getActions('replays');

    // store needs the replays
    actions.getForAccountId(id);

  }

}
