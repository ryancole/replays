/**
 * Module dependencies
 */

import React from 'react';


/**
 * Component definition
 */

class AuthenticationSignin extends React.Component {

  render () {
    return (
      <div className="row">
        <div className="col-sm-4">
          <form method="post">
            <div className="form-group">
              <label for="username">Username</label>
              <input className="form-control" type="text" name="username" />
            </div>
            <div className="form-group">
              <label for="password">Password</label>
              <input className="form-control" type="password" name="password" />
            </div>
            <input className="btn btn-primary" type="submit" value="Signin" />
          </form>
        </div>
      </div>
    );
  }

}


/**
 * Module exports
 */

export default AuthenticationSignin;