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
      step: 1
    };

  }

  componentDidUpdate () {
    switch (this.state.step) {
      case 2:
        this._uploadToAmazon();
        break;
      case 3:
        this._saveToDatabase();
        break;
    }
  }

  render () {
    switch (this.state.step) {
      case 1:
        return <ReplayUploadForm onUploadAttempt={this._handleUploadAttempt} />;
      case 2:
        return <h2>Uploading ...</h2>;
      case 3:
        return <h2>Done!</h2>;
    }
  }

  _saveToDatabase () {
    let replays = this.props.flux.getActions('replays');
    console.log(replays);
    replays.create({
      filename: this.state.file.name
    });
  }

  _uploadToAmazon () {
    Replays.upload(this.state.file, this.state.signed).then(response => {
      this.setState({
        step: 3
      });
    });
  }

  _handleUploadAttempt (file) {
    Replays.sign(file).then(response => {
      this.setState({
        step: 2,
        file: file,
        signed: response
      });
    });
  }

}


/**
 * Module exports
 */

export default ReplayUploadFormContainer;
