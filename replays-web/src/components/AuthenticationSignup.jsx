/**
 * Module dependencies
 */

import React from 'react';


/**
 * Component definition
 */

class AuthenticationSignup extends React.Component {

  constructor () {

    super();

    // pre-bind event handlers
    this._handleSubmit = this._handleSubmit.bind(this);

  }

  _handleSubmit (event) {

    event.preventDefault();

    // santitize form inputs
    var username = React.findDOMNode(this.refs.username).value.trim();
    var password = React.findDOMNode(this.refs.password).value.trim();
    var passwordConfirm = React.findDOMNode(this.refs.passwordConfirm).value.trim();

    // validate form data
    if (!username || !password) {
      return;
    } else if (password != passwordConfirm) {
      return;
    }

    // clean form inputs
    React.findDOMNode(this.refs.username).value = "";
    React.findDOMNode(this.refs.password).value = "";
    React.findDOMNode(this.refs.passwordConfirm).value = "";

    return;

  }

  render () {
    return (
      <div className="row">
        <div className="col-sm-4">
          <form method="post" onSubmit={this._handleSubmit}>
            <div className="form-group">
              <label htmlFor="username">Username</label>
              <input className="form-control" type="text" ref="username" />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input className="form-control" type="password" ref="password" />
            </div>
            <div className="form-group">
              <label htmlFor="passwordConfirm">Confirm Password</label>
              <input className="form-control" type="password" ref="passwordConfirm" />
            </div>
            <input className="btn btn-primary" type="submit" value="Signup" />
          </form>
        </div>
      </div>
    );
  }

}


/**
 * Module exports
 */

export default AuthenticationSignup;