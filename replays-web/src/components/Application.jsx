import React from 'react';
import {RouteHandler} from 'react-router';

class Application extends React.Component {

  render() {
    return (
      <section>
        <header>
          <h1>Replays</h1>
        </header>
        <RouteHandler />
      </section>
    );
  }

}

export default Application;