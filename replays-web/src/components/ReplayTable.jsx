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

    // table header columns
    const headers = this._buildTableHeaders();

    // table rows
    const rows = this._buildTableRows(this.props.replays);

    return (
      <table className="table table-striped table-hover replayTable">
        <thead>
          {headers}
        </thead>
        <tbody>
          {rows}
        </tbody>
      </table>
    );

  }

  _buildTableHeaders () {
    if (this.props.isAccountOwner == true) {
      return (
        <tr>
          <th>Name</th>
          <th>Uploaded</th>
        </tr>
      );
    }
    return (
      <tr>
        <th>Name</th>
        <th>Author</th>
        <th>Uploaded</th>
      </tr>
    );
  }

  _buildTableRows (replays) {

    // build the table rows
    let nodes = replays.map(replay => {
      return (
        <ReplayTableRow
          key={replay.id}
          replay={replay}
          isAccountOwner={this.props.isAccountOwner} />
      );
    });

    // show a no rows message if empty
    if (nodes.length == 0) {
      nodes = (
        <tr>
          <td colSpan="3" className="text-muted text-center">
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
