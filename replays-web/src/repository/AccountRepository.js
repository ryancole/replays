/**
 * Module dependencies
 */

import qwest from 'qwest';


/**
 * Component definition
 */

export function getByUsername (username) {
  return qwest.get(`http://localhost:8080/api/account/${username}`);
};
