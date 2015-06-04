/**
 * Module dependencies
 */

import React from 'react';
import Modal from 'react-modal';


/**
 * Components
 */

import ReplayUploadForm from './ReplayUploadForm';


/**
 * Component definition
 */

class ReplayUploadFormModal extends React.Component {

  constructor () {

    super();

    Modal.setAppElement(document.getElementById('container'));

    this._handleUploadSubmit = this._handleUploadSubmit.bind(this);

  }

  render () {
    return (
      <Modal>

        <ReplayUploadForm
          onUploadAttempt={this._handleUploadSubmit} />
            
      </Modal>
    );
  }

  _handleUploadSubmit (files) {

    console.log(files);

  }

}


/**
 * Module exports
 */

export default ReplayUploadFormModal;
