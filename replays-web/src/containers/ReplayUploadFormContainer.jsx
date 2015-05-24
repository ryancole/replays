/**
 * Module dependencies
 */

import React from 'react';
import connectToStores from 'flummox/connect';


/**
 * Repositories
 */

import * as Replays from '../repository/ReplayRepository';


/**
 * Components
 */

import ReplayUploadForm from '../components/ReplayUploadForm';


/**
 * Component definition
 */

class ReplayUploadFormContainer extends React.Component {

  constructor() {

    super();

    // pre-binding
    this._handleUploadAttempt = this._handleUploadAttempt.bind(this);

    // initial state
    this.state = {
      signed: null
    };

  }

  render () {
    if (this.state.signed) {
      return (
        <h2>Uploading ...</h2>
      );
    } else {
      return (
        <ReplayUploadForm onUploadAttempt={this._handleUploadAttempt} />
      );
    }
  }

  _handleUploadAttempt (file) {

    // request signed upload request
    Replays.sign(file).then(response => {

      // update component state
      this.setState({
        signed: response
      });

      // start file upload
      Replays.upload(file, response).then(response => {

        console.log(response);

      });

    });

  }

}


/**
 * Module exports
 */

export default ReplayUploadFormContainer;
