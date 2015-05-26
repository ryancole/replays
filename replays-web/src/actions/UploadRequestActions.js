/**
 * Module dependencies
 */

import { Actions } from 'flummox';
import UploadRequests from '../repository/UploadRequestRepository';


class UploadRequestActions extends Actions {

  /**
   * create a signed upload request
   */

  async create (file) {
    return await UploadRequests.create(file);
  }

}


/**
 * Module exports
 */

export default UploadRequestActions;
