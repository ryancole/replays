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


// initialize the single redux store
const store = createStore(reducer);

export default (
  <Router history={history}>
    <Route component={reduxRouteComponent(store)}>
      <Route path="/" component={ApplicationView}>
        <Route path="auth">
          <Route path="signin" component={AuthenticationSigninView} />
          <Route path="signup" component={AuthenticationSignupView} />
          <Route path="signout" component={AuthenticationSignoutView} />
        </Route>
        <Route path="replay">
          <Route path="/" component={ReplayIndexView} onEnter={handleOnEnter} />
          <Route path=":id" component={ReplayDetailView} onEnter={handleOnEnter} />
        </Route>
      </Route>
    </Route>
  </Router>
);

// prevent entering a route that needs auth
function handleOnEnter (nextState, transition) {
  
  const state = store.getState();

  if (state.session === null) {

    transition.to("/auth/signin");

  }

}
