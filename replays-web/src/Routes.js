import React from 'react';
import { history } from 'react-router/lib/BrowserHistory';
import { reduxRouteComponent } from 'redux-react-router';
import { Route, Router, DefaultRoute } from 'react-router';

import { reducer, createStore } from './reducers';

import ReplayIndexView from './views/replay/ReplayIndexView';
import ReplayDetailView from './views/replay/ReplayDetailView';

import ApplicationView from './views/application/ApplicationView';

import AuthenticationSigninView from './views/authentication/AuthenticationSigninView';
import AuthenticationSignupView from './views/authentication/AuthenticationSignupView';
import AuthenticationSignoutView from './views/authentication/AuthenticationSignoutView';


// redux store
const store = createStore(reducer);

export default (
  <Router history={history}>
    <Route component={reduxRouteComponent(store)}>
      <Route path="/" component={ApplicationView}>
        <Route path="signin" component={AuthenticationSigninView} />
        <Route path="signup" component={AuthenticationSignupView} />
        <Route path="signout" component={AuthenticationSignoutView} />
        <Route path="replay" component={ReplayIndexView} />
        <Route path="replay/:id" component={ReplayDetailView} />
      </Route>
    </Route>
  </Router>
);
