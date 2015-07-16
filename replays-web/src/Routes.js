import React from 'react';
import { Route, DefaultRoute } from 'react-router';

import ReplayIndexView from './views/replay/ReplayIndexView';
import ReplayDetailView from './views/replay/ReplayDetailView';

import ApplicationView from './views/application/ApplicationView';

import AuthenticationSigninView from './views/authentication/AuthenticationSigninView';
import AuthenticationSignupView from './views/authentication/AuthenticationSignupView';
import AuthenticationSignoutView from './views/authentication/AuthenticationSignoutView';


export default (
  <Route path="/" handler={ApplicationView}>
    <Route name="auth">
      <Route name="signin" handler={AuthenticationSigninView} />
      <Route name="signup" handler={AuthenticationSignupView} />
      <Route name="signout" handler={AuthenticationSignoutView} />
    </Route>
    <Route name="replay">
      <Route name="replay-detail" path=":id" handler={ReplayDetailView} />
      <DefaultRoute name="replay-index" handler={ReplayIndexView} />
    </Route>
    <DefaultRoute handler={ReplayIndexView} />
  </Route>
);
