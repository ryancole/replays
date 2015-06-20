/**
 * Module dependencies
 */

import fetchival from 'fetchival';
import settings from '../../settings';


const api = fetchival(settings.API_ADDR, {
  mode: "cors"
});


function getByActiveSession (session) {

  let replays = api("replay", {
    headers: {
      "Authorization": `Bearer ${session.token}`
    }
  });

  return replays.get();

}


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
      "Content-Type": "application/octet-stream",
      "Content-Disposition": "attachment"
    }
  });

};


/**
 * Module exports
 */

export default {
  upload: upload,
  getByActiveSession: getByActiveSession
};
