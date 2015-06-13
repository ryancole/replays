/**
 * Module dependencies
 */

import React from 'react';
import { Route, DefaultRoute } from 'react-router';


/**
 * Components
 */

import AccountView from './views/AccountView';
import AccountReplayView from './views/AccountReplayView';
import AccountDetailView from './views/AccountDetailView';

import ApplicationView from './views/ApplicationView';
import ApplicationReplayView from './views/ApplicationReplayView';

import AuthenticationView from './views/AuthenticationView';
import AuthenticationSigninView from './views/AuthenticationSigninView';
import AuthenticationSignupView from './views/AuthenticationSignupView';


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
