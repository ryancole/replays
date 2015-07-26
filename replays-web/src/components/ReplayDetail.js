import React from "react";

export default class ReplayDetail extends React.Component {
  render () {
    return (
      <dl className="dl-horizontal">
        <dt>Filename</dt>
        <dd>{this.props.replay.filename}</dd>
        <dt>Size</dt>
        <dd>{this.props.replay.size} bytes</dd>
        <dt>Date Uploaded</dt>
        <dd>{this.props.replay.dateCreated}</dd>
      </dl>
    );
  }
}
