/**
 * Module dependencies
 */

import React from 'react';


/**
 * Component definition
 */

class ReplayForm extends React.Component {

  constructor () {
    super();
    this._handleSubmit = this._handleSubmit.bind(this);
  }

  render () {
    return (
      <form className="replayForm" onSubmit={this._handleSubmit}>
        <input type="text" ref="filename" placeholder="filename" />
        <input type="text" ref="description" placeholder="description" />
        <input type="submit" value="Upload" />
      </form>
    );
  }

  _handleSubmit (event) {
    event.preventDefault();
    let filename = React.findDOMNode(this.refs.filename).value.trim();
    let description = React.findDOMNode(this.refs.description).value.trim();
    if (!filename || !description) {
      return;
    }
    this.props.onReplaySubmit({
      filename: filename,
      description: description
    });
    React.findDOMNode(this.refs.filename).value = "";
    React.findDOMNode(this.refs.description).value = "";
    return;
  }

}


/**
 * Module exports
 */

export default ReplayForm;