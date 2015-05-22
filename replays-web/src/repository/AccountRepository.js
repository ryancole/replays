/**
 * Module dependencies
 */

import reqwest from 'reqwest';


/**
 * Component definition
 */

export function getByUsername (username) {
  return reqwest({
    url: `http://localhost:8080/api/account/${username}`,
    crossOrigin: true
  });
};
