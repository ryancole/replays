/**
 * Module dependencies
 */

import fetchival from 'fetchival';
import settings from '../../settings';


const api = fetchival(settings.API_ADDR, {
  mode: "cors"
});

/**
 * get a signed upload request
 */

function get (token, file) {

  let payload = {
    name: file.name
  };

  // configure api endpoint
  let requests = api('uploadrequest', {
    headers: {
      "Authorization": `Bearer ${token}`
    }
  });

  // request signed upload token
  return requests.get(payload);

};


/**
 * Module exports
 */

export default {
  get: get
};
