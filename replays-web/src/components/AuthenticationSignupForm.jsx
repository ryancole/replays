/**
 * Module dependencies
 */

import React from 'react';


/**
 * Component definition
 */

class AuthenticationSignupForm extends React.Component {

  constructor () {
    super();
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
        <div className="form-group">
          <label htmlFor="password">Confirm Password</label>
          <input className="form-control" type="password" ref="passwordConfirm" />
        </div>
        <input className="btn btn-primary" type="submit" value="Signup" />
      </form>
    );
  }

  _handleSubmit (event) {

    event.preventDefault();
    
    // santitize form inputs
    let username = React.findDOMNode(this.refs.username).value.trim();
    let password = React.findDOMNode(this.refs.password).value.trim();
    let passwordConfirm = React.findDOMNode(this.refs.passwordConfirm).value.trim();

    if (!username || !password) {
      return;
    }

    if (password != passwordConfirm) {
      return;
    }

    // clear password inputs
    React.findDOMNode(this.refs.password).value = "";
    React.findDOMNode(this.refs.passwordConfirm).value = "";

    // handle the signin attempt
    this.props.signup(username, password);

  }

}


/**
 * Module exports
 */

export default AuthenticationSignupForm;
