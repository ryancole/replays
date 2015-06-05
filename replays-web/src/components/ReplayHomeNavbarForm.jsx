/**
 * Module dependencies
 */

import React from 'react';


/**
 * Component definition
 */

class ReplayHomeNavbarForm extends React.Component {

  constructor () {

    super();

    // pre-binding
    this._handleSubmit = this._handleSubmit.bind(this);

  }

  render () {
    return (
      <form className="navbar-form" onSubmit={this._handleSubmit}>
        <div className="form-group">
          <input className="form-control" type="file" ref="filename" />
        </div>
        <button className="btn btn-default" type="submit">
          Upload
        </button>
      </form>
    );
  }

  _handleSubmit (event) {

    // prevent default action
    event.preventDefault();

    // extract list of selected files
    let files = React.findDOMNode(this.refs.filename).files;

    if (files.length == 0) {
      return;
    }

    // trigger the upload attempt
    this.props.onUploadAttempt(files[0]);

  }

}


/**
 * Module exports
 */

export default ReplayHomeNavbarForm;
