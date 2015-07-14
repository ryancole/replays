import React from 'react';
import { RouteHandler } from 'react-router';


class HomeView extends React.Component {

  render () {
    return (
      <RouteHandler {...this.props} />
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
      <HomeView {...this.props} />
    );

  }

}
