import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import * as SessionActions from "../../actions/SessionActions";


@connect()
export default class AuthenticationSignoutView extends React.Component {

  constructor (props) {
    super(props);
    this.actions = bindActionCreators(SessionActions, props.dispatch);
  }

  render() {
    return false;
  }

  componentDidMount () {
    this.actions.clearSession();
  }

}
