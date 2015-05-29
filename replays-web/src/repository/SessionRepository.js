/**
 * Module dependencies
 */

import fetch from 'fetch';


/**
 * fetch a single session
 */

function create (username, password) {

  let payload = {
    username: username,
    password: password
  };

  return fetch("http://localhost:8080/api/session", {
    method: 'post',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(payload)
  });

};


/**
 * Module exports
 */

export default {
  create: create
};
