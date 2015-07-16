import React from 'react';
import SectionNavbar from '../../components/SectionNavbar';
import AuthenticationSignupForm from '../../components/AuthenticationSignupForm';


export default class AuthenticationSignupView extends React.Component {

  static get propTypes () {
    return {
      actions: React.PropTypes.object.isRequired
    };
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
              onSignup={this.props.actions.createAccount} />
          </div>
        </div>
      </div>
    );
  }

}
