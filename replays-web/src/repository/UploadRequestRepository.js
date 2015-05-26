/**
 * Module dependencies
 */

import qwest from 'qwest';


/**
 * get a signed upload request
 */

function get (file) {

  let payload = {
    name: file.name,
    type: file.type
  };

  return qwest.get('http://localhost:8080/api/uploadrequest', payload);

};


/**
 * Module exports
 */

export default {
  get: get
};
