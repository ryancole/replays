import React from 'react';
import FluxComponent from 'flummox/component';
import { RouteHandler } from 'react-router';


class HomeView extends React.Component {

  render () {
    return (
      <FluxComponent>
        <RouteHandler {...this.props} />
      </FluxComponent>
    );
  }

}

export default class HomeViewWrapper extends React.Component {

  static get contextTypes () {
    return {
      router: React.PropTypes.func
    };
  }

  render () {
    return (
      <FluxComponent>
        <HomeView {...this.props} />
      </FluxComponent>
    );

  }

  componentWillMount () {
    if (this.props.isAuthenticated !== true) {
      this.context.router.transitionTo("signin");
    }
  }

}
