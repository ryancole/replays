import React from "react";
import { history } from "react-router/lib/BrowserHistory";
import { Route, Router } from "react-router";
import { reduxRouteComponent } from "redux-react-router";

import { reducer, createStore } from "./reducers";

import ApplicationView from "./views/application/ApplicationView";

import ReplayIndexView from "./views/replay/ReplayIndexView";
import ReplayDetailView from "./views/replay/ReplayDetailView";

import AuthenticationSigninView from "./views/authentication/AuthenticationSigninView";
import AuthenticationSignupView from "./views/authentication/AuthenticationSignupView";
import AuthenticationSignoutView from "./views/authentication/AuthenticationSignoutView";


// initialize the single redux store
const store = createStore(reducer);

// enforce active session prior to accessing
// a specified route
function requireSession (nextState, transition) {

  // fetch session from store
  const { session } = store.getState();

  // redirect to signin if no session
  if (session === null) {
    transition.to("/auth/signin");
  }

}

export default (
  <Router history={history}>
    <Route component={reduxRouteComponent(store)}>
      <Route path="/" component={ApplicationView}>
        <Route path="auth">
          <Route path="signin" component={AuthenticationSigninView} />
          <Route path="signup" component={AuthenticationSignupView} />
          <Route path="signout" component={AuthenticationSignoutView} />
        </Route>
        <Route path="replay" component={ReplayIndexView} onEnter={requireSession} />
        <Route path="replay/:id" component={ReplayDetailView} onEnter={requireSession} />
      </Route>
    </Route>
  </Router>
);
