import React from 'react';

export default class AuthenticationSignoutView extends React.Component {

  static get propTypes () {
    return {
      actions: React.PropTypes.object.isRequired
    };
  }

  render() {
    return false;
  }

  componentDidMount () {
    this.props.actions.clearSession();
  }

}
