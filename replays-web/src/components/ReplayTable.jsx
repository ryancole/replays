import React from 'react';
import ReplayTableRow from './ReplayTableRow';


export default class ReplayTable extends React.Component {

  render () {

    // table rows
    const rows = this._buildTableRows(this.props.replays);

    return (
      <table className="table table-striped table-hover">
        <thead>
          <tr>
            <th>Name</th>
            <th>Uploaded</th>
          </tr>
        </thead>
        <tbody>
          {rows}
        </tbody>
      </table>
    );

  }

  _buildTableRows (replays) {

    // build the table rows
    let nodes = replays.map(replay => {
      return (
        <ReplayTableRow
          key={replay.id}
          replay={replay} />
      );
    });

    // show a no rows message if empty
    if (nodes.length == 0) {
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
