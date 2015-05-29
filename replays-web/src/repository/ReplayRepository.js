/**
 * Module dependencies
 */

import fetchival from 'fetchival';


/**
 * get all replays
 */

function getAll () {

  let replays = fetchival('http://localhost:8080/api/replay', {
    mode: 'cors'
  });

  return replays.get();

};


/**
 * upload a replay to S3
 */

function upload (file, signed) {

  let form = new FormData();

  // add the file to the form
  form.append('file', file);

  return fetchival.fetch(signed.data, {
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
