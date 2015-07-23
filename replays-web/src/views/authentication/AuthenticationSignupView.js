import React from "react";
import { bindActionCreators } from "redux";

import SectionNavbar from "../../components/SectionNavbar";
import AuthenticationSignupForm from "../../components/AuthenticationSignupForm";

import * as AccountActions from "../../actions/AccountActions";


export default class AuthenticationSignupView extends React.Component {

  constructor (props) {
    super(props);
    this.actions = bindActionCreators(AccountActions, props.dispatch);
  }

  render() {
    return (
      <div>
        <div className="row">
          <div className="col-sm-12">
            <SectionNavbar label="Sign Up" />
          </div>
        </div>
        <div className="row">
          <div className="col-sm-4 col-sm-offset-3">
            <AuthenticationSignupForm
              onSignup={this.actions.createAccount} />
          </div>
        </div>
      </div>
    );
  }

}
