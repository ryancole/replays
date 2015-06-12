/**
 * Module dependencies
 */

import fetchival from 'fetchival';
import settings from '../../settings';


const api = fetchival(settings.API_ADDR, {
  mode: "cors"
});


/**
 * get all replays
 */

function getAll () {

  // configure replay endpoint
  let replays = api('replay');

  // fetch collection of all replays
  return replays.get();

};


/**
 * get a single replay by id
 */

function getById (id) {

  // configure replay endpoint
  let replays = api('replay');

  // fetch detail for a single replay
  return replays(id).get();

};


/**
 * get all replays by account id
 */

function getByAccountId (id) {

  // configure replay endpoint
  let replays = api('replay');

  // fetch collection of all replays
  return replays.get({
    accountId: id
  });

};


/**
 * get a collection of replays with a specific owner
 */

function forOwner (token) {

  let headers = {
    "Authorization": `Bearer ${token}`
  };

  // configure replay endpoint
  let replays = api('replay/mine', {
    headers: headers
  })

  // fetch collection of user's replays
  return replays.get();

}


/**
 * upload a replay to S3
 */

function upload (file, signed) {

  let form = new FormData();

  // add the file to the form
  form.append('file', file);

  // the content type and ACL are
  // both required parts of this
  // request, because of what was
  // included in the signature body
  return fetchival.fetch(signed.url, {
    body: form,
    method: 'put',
    headers: {
      "Content-Type": file.type
    }
  });

};


/**
 * Module exports
 */

export default {
  upload: upload,
  getAll: getAll,
  getById: getById,
  forOwner: forOwner,
  getByAccountId: getByAccountId
};
