import React from 'react';
import SectionNavbar from '../../components/SectionNavbar';
import AuthenticationSigninForm from '../../components/AuthenticationSigninForm';

export default class AuthenticationSigninView extends React.Component {

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
            <SectionNavbar label="Sign In" />
          </div>
        </div>
        <div className="row">
          <div className="col-sm-4 col-sm-offset-3">
            <AuthenticationSigninForm
              onSignin={this.props.actions.fetchNewSession} />
          </div>
        </div>
      </div>
    );
  }

}
