import React from 'react';

class Login extends React.Component {

  constructor() {
    this.state = {
      user: '',
      password: ''
    };
  }

  login(e) {
    e.preventDefault();
    Auth.login(this.state.user, this.state.password)
        .catch(function(err) {
          console.log('Error logging in', err);
        });
  }

  render() {
    return (
      <form role="form">
        <div className="form-group">
          <input type="text" placeholder="Username" valueLink={this.linkState(‘user’)} />
          <input type="password" placeholder="Password" valueLink={this.linkState(‘password’)} />
        </div>
        <button type="submit" onClick={this.login.bind(this)}>Submit</button>
      </form>
    );
  }

}

export default Login;