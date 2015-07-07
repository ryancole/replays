import React from 'react';
import Router from 'react-router';
import FluxComponent from 'flummox/component';
import injectTapEventPlugin from 'react-tap-event-plugin';

import AppFlux from './AppFlux';
import AppRouter from './AppRouter';


/**
 * needed by material ui
 */

injectTapEventPlugin();


/**
 * Instanciate the flux application
 */

const flux = new AppFlux();


/**
 * Render the application
 */

Router.run(AppRouter, (Handler, State) => {

  React.render(
    <FluxComponent
      flux={flux}
      params={State.params}
      connectToStores={{
        sessions: store => ({
          activeSession: store.activeSession,
          isAuthenticated: store.isAuthenticated
        })
      }}>
      <Handler />
    </FluxComponent>,
    document.getElementById("container")
  );

});
