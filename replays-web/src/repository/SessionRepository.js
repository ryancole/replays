/**
 * Module dependencies
 */

import fetchival from 'fetchival';


/**
 * fetch a single session
 */

function create (username, password) {

  let payload = {
    username: username,
    password: password
  };

  let sessions = fetchival("http://localhost:8080/api/session", {
    mode: 'cors'
  });

  return sessions.post(payload);

};


/**
 * Module exports
 */

export default {
  create: create
};
