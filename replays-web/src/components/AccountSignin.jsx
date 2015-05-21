/**
 * Module dependencies
 */

import React from 'react';


/**
 * Component definition
 */

class AccountSignin extends React.Component {

  render () {
    return (
      <form>
        <input type="text" name="username" />
        <input type="password" name="password" />
      </form>
    );
  }

}


/**
 * Module exports
 */

export default AccountSignin;