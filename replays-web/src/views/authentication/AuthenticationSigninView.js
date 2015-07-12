import React from 'react';
import SectionNavbar from '../../components/SectionNavbar';
import AuthenticationSigninForm from '../../components/AuthenticationSigninForm';

export default class AuthenticationSigninView extends React.Component {

  static get propTypes () {
    return {
      fetchNewSession: React.PropTypes.func.isRequired
    };
  }

  render() {
    return (
      <div>
        <div className="row">
          <div className="col-sm-12">
            <SectionNavbar />
          </div>
        </div>
        <div className="row">
          <div className="col-sm-4 col-sm-offset-3">
            <AuthenticationSigninForm
              onSignin={this.props.fetchNewSession} />
          </div>
        </div>
      </div>
    );
  }

}
