import 'bootstrap/css/bootstrap.css';

import React from 'react';
import Router from 'react-router';
import { Provider } from 'redux/react';
import { createRedux } from 'redux';

import Routes from './Routes';
import Replays from './stores/ReplayStore';
import Accounts from './stores/AccountStore';
import Sessions from './stores/SessionStore';


/**
 * instanciate redux
 */

const redux = createRedux({
  replays: Replays,
  sessions: Sessions
});


/**
 * run the application
 */

Router.run(Routes, (Handler, State) => {

  React.render(
    <Provider redux={redux}>
      {() => <Handler />}
    </Provider>,
    document.getElementById("container")
  );

});
