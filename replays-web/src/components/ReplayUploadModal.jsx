/**
 * Module dependencies
 */

import React from 'react';
import { Button, Modal } from 'react-bootstrap';


/**
 * Component definition
 */

class ReplayUploadModal extends React.Component {

  render () {
    return (
      <Modal
        title="Upload New Replay"
        animation={false}
        onRequestHide={this.props.onRequestHide}>

        <div className="modal-body">
          <p>Hello.</p>
        </div>
        <div className="modal-footer">
          <Button onClick={this.props.onRequestHide}>
            Cancel
          </Button>
        </div>
        
      </Modal>
    );
  }

}


/**
 * Module exports
 */

export default ReplayUploadModal;
