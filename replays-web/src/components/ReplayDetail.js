import React from "react";
import moment from "moment";
import { Link } from "react-router";

export default class ReplayDetail extends React.Component {
  render () {
    const dateCreated = moment(this.props.replay.dateCreated);
    return (
      <dl className="dl-horizontal">
        <dt>Filename</dt>
        <dd>{this.props.replay.filename}</dd>
        <dt>Size</dt>
        <dd>{this.props.replay.size} bytes</dd>
        <dt>Date Uploaded</dt>
        <dd>{dateCreated.format("LLL")}</dd>
        <dt>Uploaded By</dt>
        <dd>
          <Link to={`/${this.props.replay.accountUsername}`}>
            {this.props.replay.accountUsername}
          </Link>
        </dd>
      </dl>
    );
  }
}
