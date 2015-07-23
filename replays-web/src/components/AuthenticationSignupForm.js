import React from "react";
import ReactDOM from "react-dom";


export default class AuthenticationSignupForm extends React.Component {

  static get propTypes () {
    return {
      onSignup: React.PropTypes.func.isRequired
    };
  }

  constructor () {

    super();

    // pre bind event handlers
    this.handleSubmit = this.handleSubmit.bind(this);

  }

  render () {
    return (
      <form onSubmit={this.handleSubmit}>
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

  handleSubmit (event) {

    event.preventDefault();

    // santitize form inputs
    let username = ReactDOM.findDOMNode(this.refs.username).value.trim();
    let password = ReactDOM.findDOMNode(this.refs.password).value.trim();
    let passwordConfirm = ReactDOM.findDOMNode(this.refs.passwordConfirm).value.trim();

    if (!username || !password) {
      return;
    }

    if (password !== passwordConfirm) {
      return;
    }

    // clear password inputs
    ReactDOM.findDOMNode(this.refs.password).value = "";
    ReactDOM.findDOMNode(this.refs.passwordConfirm).value = "";

    // handle the signin attempt
    this.props.onSignup(username, password);

  }

}
