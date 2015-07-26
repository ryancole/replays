import React from "react";
import moment from "moment";

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
      </dl>
    );
  }
}
