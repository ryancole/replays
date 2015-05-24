/**
 * Module dependencies
 */

import qwest from 'qwest';


/**
 * get all replays
 */

export function getAll () {
  return qwest.get('http://localhost:8080/api/replay');
};


/**
 * create a new replay
 */

export function create (replay) {
  return qwest.post('http://localhost:8080/api/replay', replay);
};


/**
 * get a signed upload request
 */

export function sign (file) {

  let payload = {
    name: file.name,
    type: file.type
  };

  return qwest.get('http://localhost:8080/api/replay/sign', payload);

};


/**
 * upload a replay to aws
 */

export function upload (file, signed) {
  return qwest.put(signed.data, file);
};