/**
 * Module dependencies
 */

import qwest from 'qwest';


/**
 * fetch a single session
 */

function create (username, password) {

  let payload = {
    username: username,
    password: password
  };

  return qwest.post("http://localhost:8080/api/session", payload);

};


/**
 * Module exports
 */

export default {
  create: create
};
