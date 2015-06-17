import React from 'react';


export default class AccountDetail extends React.Component {

  render() {
    return (
      <dl className="dl-horizontal">
        <dt>Member Since</dt>
        <dd>{this.props.account.date_created}</dd>
      </dl>
    );
  }

}
