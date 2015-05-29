/**
 * Module dependencies
 */

import fetch from 'fetch';


/**
 * get all replays
 */

function getAll () {

  return fetch('http://localhost:8080/api/replay');

};


/**
 * upload a replay to S3
 */

function upload (file, signed) {

  let form = new FormData();

  // add the file to the form
  form.append('file', file);

  return fetch(signed.data, {
    method: 'put',
    body: form
  });

};


/**
 * Module exports
 */

export default {
  getAll: getAll,
  upload: upload
};
