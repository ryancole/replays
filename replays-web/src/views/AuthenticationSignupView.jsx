import React from 'react';
import AuthenticationSignupForm from '../components/AuthenticationSignupForm';


class AuthenticationSignupView extends React.Component {

  render() {
    return (
      <div className="row">
        <div className="col-sm-4 col-sm-offset-3">
          <AuthenticationSignupForm
            onSignup={this.props.onSignup} />
        </div>
      </div>
    );
  }

}

export default class AuthenticationSignupViewWrapper extends React.Component {

  render () {
    return (
      <AuthenticationSignupView {...this.props} />
    );
  }

}
