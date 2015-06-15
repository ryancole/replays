/**
 * Module dependencies
 */

import React from 'react';
import { Route, DefaultRoute } from 'react-router';


/**
 * Components
 */

import AccountView from './views/account/AccountView';
import AccountReplayView from './views/account/AccountReplayView';
import AccountDetailView from './views/account/AccountDetailView';

import ApplicationView from './views/application/ApplicationView';
import ApplicationReplayView from './views/application/ApplicationReplayView';

import AuthenticationView from './views/authentication/AuthenticationView';
import AuthenticationSigninView from './views/authentication/AuthenticationSigninView';
import AuthenticationSignupView from './views/authentication/AuthenticationSignupView';


/**
 * Instanciate the application router
 */

const AppRouter = (
  <Route name="application" path="/" handler={ApplicationView}>
    <Route name="authentication" handler={AuthenticationView}>
      <Route name="signup" handler={AuthenticationSignupView} />
      <DefaultRoute name="signin" handler={AuthenticationSigninView} />
    </Route>
    <Route name="account" path=":username" handler={AccountView}>
      <Route name="replay" path=":id" handler={AccountReplayView} />
      <DefaultRoute handler={AccountDetailView} />
    </Route>
    <DefaultRoute handler={ApplicationReplayView} />
  </Route>
);


/**
 * Module exports
 */

export default AppRouter;
