/**
 * Module dependencies
 */

import fetchival from 'fetchival';


/**
 * get a signed upload request
 */

function get (token, file) {

  let payload = {
    name: file.name,
    type: file.type
  };

  let requests = fetchival('http://localhost:8080/api/uploadrequest', {
    mode: 'cors',
    headers: {
      "Authorization": `Bearer ${token}`
    }
  });

  return requests.get(payload);

};


/**
 * Module exports
 */

export default {
  get: get
};
