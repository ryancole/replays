/**
 * Module dependencies
 */

import fetchival from 'fetchival';


/**
 * create a new account
 */

function create (username, password) {

  let payload = {
    username: username,
    password: password
  };

  let accounts = fetchival('http://localhost:8080/api/account', {
    mode: 'cors'
  });

  return accounts.post(payload);

}


/**
 * Module exports
 */

export default {
  create: create
};
