import React from 'react';
import { connect } from 'redux/react';
import { RouteHandler } from 'react-router';


/**
 * react components
 */

import ApplicationLogo from '../../components/ApplicationLogo';
import ApplicationNavbar from '../../components/ApplicationNavbar';
import AuthenticationNavbar from '../../components/AuthenticationNavbar';


@connect(state => ({
  activeSession: state.session,
  isAuthenticated: state.session != null
}))
export default class ApplicationView extends React.Component {

  static get contextTypes () {
    return {
      router: React.PropTypes.func
    };
  }

  render () {
    return (
      <div className="container">
        <AuthenticationNavbar {...this.props} />
        <div className="row">
          <div className="col-sm-2">
            <ApplicationLogo />
            <ApplicationNavbar {...this.props} />
          </div>
          <div className="col-sm-10">
            <RouteHandler {...this.props} />
          </div>
        </div>
      </div>
    );
  }

  componentWillReceiveProps (props) {
    if (this.props.isAuthenticated == false && props.isAuthenticated == true) {
      this.context.router.transitionTo("replays");
    } else if (this.props.isAuthenticated == true && props.isAuthenticated == false) {
      this.context.router.transitionTo("application");
    }
  }

}
