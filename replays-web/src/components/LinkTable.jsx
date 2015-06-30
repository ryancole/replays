import React from 'react';
import LinkTableRow from './ReplayTableRow';


export default class LinkTable extends React.Component {

  render () {

    const rows = this._buildTableRows(this.props.links);

    return (
      <table className="table table-striped table-hover">
        <thead>
          <tr>
            <th>Source</th>
            <th>Uploaded</th>
          </tr>
        </thead>
        <tbody>
          {rows}
        </tbody>
      </table>
    );

  }

  _buildTableRows (links) {

    // build the table rows
    let nodes = links.map(link => {
      return (
        <LinkTableRow
          key={link.id}
          link={link} />
      );
    });

    // show a no rows message if empty
    if (nodes.length == 0) {
      nodes = (
        <tr>
          <td colSpan="2" className="text-muted text-center">
            There are no links to show
          </td>
        </tr>
      );
    }

    return nodes;

  }

}
