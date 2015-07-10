import 'bootstrap/css/bootstrap.css';

import React from 'react';
import Router from 'react-router';

import { Provider } from 'redux/react';
import { createRedux } from 'redux';

import AppFlux from './AppFlux';
import AppRouter from './AppRouter';


/**
 * global redux instance
 */

const redux = creatRedux();


/**
 * render application
 */

Router.run(AppRouter, (Handler, State) => {

  React.render(
    <Provider redux={redux}>
      {() => <Handler />}
    </Provider>,
    document.getElementById("container")
  );

});
