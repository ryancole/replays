import React from "react";
import { bindActionCreators } from "redux";

import * as SessionActions from "../../actions/SessionActions";

import SectionNavbar from "../../components/SectionNavbar";
import AuthenticationSigninForm from "../../components/AuthenticationSigninForm";


export default class AuthenticationSigninView extends React.Component {

  constructor (props) {
    super(props);
    this.actions = bindActionCreators(SessionActions, props.dispatch);
  }

  render() {
    return (
      <div>
        <div className="row">
          <div className="col-sm-12">
            <SectionNavbar label="Sign In" />
          </div>
        </div>
        <div className="row">
          <div className="col-sm-4 col-sm-offset-3">
            <AuthenticationSigninForm
              onSignin={this.actions.fetchNewSession} />
          </div>
        </div>
      </div>
    );
  }

}
