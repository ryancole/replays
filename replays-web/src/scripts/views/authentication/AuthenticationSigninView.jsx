import React from 'react';
import AuthenticationSigninForm from '../../components/AuthenticationSigninForm';


class AuthenticationSigninView extends React.Component {

  render() {
    return (
      <div className="row">
        <div className="col-sm-4 col-sm-offset-3">
          <AuthenticationSigninForm
            onSignin={this.props.onSignin} />
        </div>
      </div>
    );
  }

}

export default class AuthenticationSigninViewWrapper extends React.Component {

  render () {
    return (
      <AuthenticationSigninView {...this.props} />
    );
  }

}
