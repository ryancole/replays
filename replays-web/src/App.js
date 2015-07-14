import 'bootstrap/css/bootstrap.css';

import thunk from 'redux-thunk';
import React from 'react';
import Router from 'react-router';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore, combineReducers } from 'redux';

import Routes from './Routes';
import Replays from './stores/ReplayStore';
import Accounts from './stores/AccountStore';
import Sessions from './stores/SessionStore';


// single redux reducer
const reducer = combineReducers({
  replays: Replays,
  accounts: Accounts,
  sessions: Sessions
});

// uhh
const fooCreateStore = applyMiddleware(thunk)(createStore);

// single redux store
const store = fooCreateStore(reducer);

// run react router application
Router.run(Routes, (Handler, State) => {

  React.render(
    <Provider store={store}>
      {() => (
        <Handler params={State.params} />
      )}
    </Provider>,
    document.getElementById("container")
  );

});
