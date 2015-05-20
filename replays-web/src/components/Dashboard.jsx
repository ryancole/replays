/**
 * Module dependencies
 */

import React from 'react';


/**
 * Components
 */

import ReplayListing from './ReplayListing';


/**
 * Define the Dashboard component
 */

class Dashboard extends React.Component {
  constructor () {
    super();
    this.replays = [
      {filename: "foo.txt", text: "This is foo"},
      {filename: "bar.txt", text: "This is bar"}
    ];
  }
  render() {
    return (
      <ReplayListing data={this.replays} />
    );
  }
}


/**
 * Module exports
 */

export default Dashboard;