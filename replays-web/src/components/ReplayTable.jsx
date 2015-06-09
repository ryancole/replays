/**
 * Module dependencies
 */

import React from 'react';


/**
 * Components
 */

import ReplayTableRow from './ReplayTableRow';


/**
 * Component definition
 */

class ReplayTable extends React.Component {

  render () {
    return (
      <table className="table table-striped table-hover replayTable">
        <thead>
          <tr>
            <th>Name</th>
            <th>Uploaded</th>
          </tr>
        </thead>
        <tbody>
          {this._buildTableRows(this.props.replays)}
        </tbody>
      </table>
    );
  }

  _buildTableRows (replays) {

    // build the table rows
    let nodes = replays.map(function (replay, index) {
      return (
        <ReplayTableRow
          key={replay._id}
          replay={replay} />
      );
    });

    // show a no rows message if empty
    if (nodes.size == 0) {
      nodes = (
        <tr>
          <td colSpan="2" className="text-muted text-center">
            There are no replays to show
          </td>
        </tr>
      );
    }

    return nodes;

  }

}


/**
 * Module exports
 */

export default ReplayTable;
