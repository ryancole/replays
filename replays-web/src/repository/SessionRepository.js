/**
 * Module dependencies
 */

import fetch from 'node-fetch';
import fetchival from 'fetchival';
import settings from '../../settings';


const api = fetchival(settings.API_ADDR, {
  mode: "cors"
});

/**
 * fetch a single session
 */

function create (username, password) {

  let payload = {
    username: username,
    password: password
  };

  console.log(fetch);

  // configure api endpoint
  let sessions = api('session');

  // create new session
  return sessions.post(payload);

};


/**
 * Module exports
 */

export default {
  create: create
};
