import fetchival from 'fetchival';
import settings from '../AppSettings';


const api = fetchival(settings.get("API_ADDR"), {
  mode: "cors"
});


function getById (session, id) {

  let replays = api("replay", {
    headers: {
      "Authorization": `Bearer ${session.token}`
    }
  });

  return replays(id).get();

}


function getAll (session) {

  let replays = api("replay", {
    headers: {
      "Authorization": `Bearer ${session.token}`
    }
  });

  return replays.get();

}


function getDownloadSource (session, id) {

  let replays = api("replay", {
    headers: {
      "Authorization": `Bearer ${session.token}`
    }
  });

  return replays(`${id}/download`).get();

};


function getUploadDestination (session, file) {

  let payload = {
    name: file.name
  };

  // configure api endpoint
  let replays = api("replays", {
    headers: {
      "Authorization": `Bearer ${session.token}`
    }
  });

  // request signed upload token
  return replays.post(payload);

};


function putToDestination (file, signed) {

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
  getAll: getAll,
  getById: getById,
  putToDestination: putToDestination,
  getDownloadSource: getDownloadSource,
  getUploadDestination: getUploadDestination
};
