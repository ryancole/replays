/**
 * Module dependencies
 */

import fetchival from 'fetchival';


const replays = fetchival('http://localhost:8080/api/replay', {
  mode: 'cors'
});

/**
 * get a single replay by id
 */

function getById (id) {

  return replays(id).get();

};


/**
 * get all replays
 */

function getAllById (skip) {

  return replays.get({
    skip: skip
  });

};


/**
 * upload a replay to S3
 */

function upload (file, signed) {

  let form = new FormData();

  // add the file to the form
  form.append('file', file);

  return fetchival.fetch(signed.url, {
    method: 'put',
    body: form
  });

};


/**
 * Module exports
 */

export default {
  upload: upload,
  getById: getById,
  getAllById: getAllById
};
