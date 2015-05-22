/**
 * Module dependencies
 */

import React from 'react';


/**
 * Decorator definition
 */

function requiresAuthentication (Component) {

  return class SecureComponent extends React.Component {

    static willTransitionTo (transition) {
      transition.redirect('/account/signin', {}, {nextPath: transition.path})
    }

    render () {
      return <Component {...this.props} />
    }

  }

};


/**
 * Module exports
 */

export default requiresAuthentication;