import React from 'react';
import { fetchNewSession } from '../actions/SessionActions';


export default class AuthenticationSigninForm extends React.Component {

  constructor () {

    super();

    // pre bind event handlers
    this._handleSubmit = this._handleSubmit.bind(this);

  }

  render () {
    return (
      <form onSubmit={this._handleSubmit}>
        <div className="form-group">
          <label htmlFor="username">Username</label>
          <input className="form-control" type="text" ref="username" />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input className="form-control" type="password" ref="password" />
        </div>
        <input className="btn btn-primary" type="submit" value="Signin" />
      </form>
    );
  }

  _handleSubmit (event) {

    event.preventDefault();
    
    // santitize form inputs
    var username = React.findDOMNode(this.refs.username).value.trim();
    var password = React.findDOMNode(this.refs.password).value.trim();

    if (!username || !password) {
      return;
    }

    // clear password input
    React.findDOMNode(this.refs.password).value = "";

    // handle the signin attempt
    fetchNewSession(username, password);

  }

}
