/**
 * Module dependencies
 */

import { Store } from 'flummox';


/**
 * Store definition
 */

class UploadRequestStore extends Store {

  constructor (flux) {

    super();

    // fetch action ids
    const uploadRequestActionIds = flux.getActionIds('uploadrequests');

    // register action handlers
    this.register(uploadRequestActionIds.create, this._handleCreate);

  }

  _handleCreate (request) {
    this.setState({
      request: request
    });
  }

}


/**
 * Module exports
 */

export default UploadRequestStore;
