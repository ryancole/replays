import React from 'react';
import Router from 'react-router';
import ApplicationRoutes from './routes';

Router.run(ApplicationRoutes, function (Handler) {
  React.render(
    <Handler />,
    document.getElementById('container')
  );
});
