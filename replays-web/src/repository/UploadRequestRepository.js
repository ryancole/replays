/**
 * Module dependencies
 */

import fetch from 'fetch';


/**
 * get a signed upload request
 */

function get (file) {

  let payload = {
    name: file.name,
    type: file.type
  };

  return fetch('http://localhost:8080/api/uploadrequest', )

  return qwest.get('http://localhost:8080/api/uploadrequest', payload);

};


/**
 * Module exports
 */

export default {
  get: get
};
