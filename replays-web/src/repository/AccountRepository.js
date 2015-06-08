/**
 * Module dependencies
 */

import fetchival from 'fetchival';
import settings from '../../settings';


const api = fetchival(settings.API_ADDR, {
  mode: "cors"
});

/**
 * create a new account
 */

function create (username, password) {

  let payload = {
    username: username,
    password: password
  };

  // configure api endpoint
  let accounts = api('account');

  // create new account
  return accounts.post(payload);

}


/**
 * Module exports
 */

export default {
  create: create
};
