import React from "react";
import ReactDOM from "react-dom";


export default class AuthenticationSigninForm extends React.Component {

  static get propTypes () {
    return {
      onSignin: React.PropTypes.func.isRequired
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
        <input className="btn btn-primary" type="submit" value="Signin" />
      </form>
    );
  }

  handleSubmit (event) {

    event.preventDefault();

    // santitize form inputs
    var username = ReactDOM.findDOMNode(this.refs.username).value.trim();
    var password = ReactDOM.findDOMNode(this.refs.password).value.trim();

    if (!username || !password) {
      return;
    }

    // clear password input
    ReactDOM.findDOMNode(this.refs.password).value = "";

    // handle the signin attempt
    this.props.onSignin(username, password);

  }

}
