/**
 * Module dependencies
 */

import qwest from 'qwest';


/**
 * get all replays
 */

function getAll () {
  return qwest.get('http://localhost:8080/api/replay');
};


/**
 * upload a replay to S3
 */

function upload (file, signed) {
  return qwest.put(signed.data, file);
};


/**
 * Module exports
 */

export default {
  getAll: getAll,
  upload: upload
};
