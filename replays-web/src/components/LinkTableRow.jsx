import React from 'react';
import { Link } from 'react-router';


export default class LinkTableRow extends React.Component {

  render () {

    const link = this.props.link;

    return (
      <tr>
        <td>
          {link.source}
        </td>
        <td>
          {replay.date_created}
        </td>
      </tr>
    );

  }

}
