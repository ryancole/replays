/**
 * Module dependencies
 */

import React from 'react';

/**
 * Define the ReplayList component
 */

class ReplayList extends React.Component {

  constructor() {
    super();
    this.state = {
      items: [
        "foo",
        "bar"
      ]
    };
  }

  render() {
    var createItem = function(itemText, index) {
      return <li key={index + itemText}>{itemText}</li>;
    };
    return <ul>{this.state.items.map(createItem)}</ul>;
  }

}

/**
 * Module exports
 */

export default ReplayList;