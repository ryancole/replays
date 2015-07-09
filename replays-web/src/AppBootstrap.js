import 'bootstrap/css/bootstrap.css';

import React from 'react';
import Router from 'react-router';
import FluxComponent from 'flummox/component';

import AppFlux from './AppFlux';
import AppRouter from './AppRouter';


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
