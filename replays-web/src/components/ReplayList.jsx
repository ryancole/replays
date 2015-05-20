/**
 * Module dependencies
 */

import React from 'react';

/**
 * Define the ReplayList component
 */

class ReplayList extends React.Component {

  render() {
    let items = this.props.replays.map(function (item, index) {
      return <li key={index + item.filename}>{item.filename}</li>;
    });
    return <ul>{items}</ul>;
  }

}

/**
 * Module exports
 */

export default ReplayList;