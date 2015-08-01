import React from "react";

import * as ReplayActions from "../../actions/ReplayActions";
import * as AccountActions from "../../actions/AccountActions";
import * as SessionActions from "../../actions/SessionActions";


export default class AuthenticationSignoutView extends React.Component {

  render() {
    return false;
  }

  componentDidMount () {
    this.props.dispatch(ReplayActions.clearReplays());
    this.props.dispatch(AccountActions.clearAccounts());
    this.props.dispatch(SessionActions.clearSession());
  }

}
