/**
 * Module dependencies
 */

import reqwest from 'reqwest';


/**
 * Component definition
 */

export function getAll () {
  return reqwest({
    url: 'http://localhost:8080/api/replay',
    crossOrigin: true
  });
};

export function create (replay) {
  return reqwest({
    url: 'http://localhost:8080/api/replay',
    data: replay,
    method: 'post',
    crossOrigin: true
  });
};