import React from "react";


export default class ReplayDetail extends React.Component {

  render () {

    const { replay } = this.props;

    return (
      <dl className="dl-horizontal">
        <dt>Filename</dt>
        <dd>{replay.filename}</dd>
        <dt>Size</dt>
        <dd>{replay.size} bytes</dd>
        <dt>Date Uploaded</dt>
        <dd>{replay.date_created}</dd>
      </dl>
    );
  }

}
