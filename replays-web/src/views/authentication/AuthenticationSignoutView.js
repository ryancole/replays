import React from "react";
import { bindActionCreators } from "redux";

import * as SessionActions from "../../actions/SessionActions";


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
