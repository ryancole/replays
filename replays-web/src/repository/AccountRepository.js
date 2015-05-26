/**
 * Module dependencies
 */

import qwest from 'qwest';


/**
 * create a new account
 */

function create (username, password) {

  let payload = {
    username: username,
    password: password
  };

  return qwest.post('http://localhost:8080/api/account', payload);

}


/**
 * Module exports
 */

export default {
  create: create
};
