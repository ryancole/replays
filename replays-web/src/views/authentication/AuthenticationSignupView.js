import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import * as SessionActions from "../../actions/SessionActions";

import SectionNavbar from "../../components/SectionNavbar";
import AuthenticationSignupForm from "../../components/AuthenticationSignupForm";


@connect()
export default class AuthenticationSignupView extends React.Component {

  constructor (props) {
    super(props);
    this.actions = bindActionCreators(SessionActions, props.dispatch);
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
