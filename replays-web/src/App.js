import 'bootstrap/css/bootstrap.css';

import React from 'react';
import Router from 'react-router';
import { Provider } from 'react-redux';
import Routes from './Routes';
import { reducer, createStore } from './reducers';


// redux store
const store = createStore(reducer);

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
