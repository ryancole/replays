import React from 'react';
import ReactRouter, { Route } from 'react-router';
import Home from './components/Home';
import Login from './components/Login';
import Signup from './components/Signup';
import LoginActions from './actions/LoginActions';
import RouterContainer from './services/RouterContainer';
import AuthenticatedApp from './components/AuthenticatedApp';

// route handlers
var routes = (
  <Route handler={AuthenticatedApp}>
    <Route name="login" handler={Login}/>
    <Route name="signup" handler={Signup}/>
    <Route name="home" path="/" handler={Home}/>
  </Route>
);

// initialize react router
var router = ReactRouter.create({routes});

// whatever the fk this is
RouterContainer.set(router);

let jwt = localStorage.getItem('jwt');

if (jwt) {
  LoginActions.loginUser(jwt);
}

router.run(function (Handler) {
  React.render(<Handler />, document.getElementById('content'));
});
