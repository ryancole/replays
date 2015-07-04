import fetchival from 'fetchival';
import Settings from '../../settings';


const api = fetchival(Settings.API_ADDR, {
  mode: "cors"
});


function remove (session, id) {

  let replays = api("replay", {
    headers: {
      "Authorization": `Bearer ${session.token}`
    }
  });

  return replays(id).delete();

};


function toggleSharing (session, id, shared) {

  let replays = api("replay", {
    headers: {
      "Authorization": `Bearer ${session.token}`
    }
  });

  const payload = {
    public: shared
  };

  return replays(id).patch(payload);

};


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
    name: file.name,
    size: file.size
  };

  // configure api endpoint
  let replays = api("replay", {
    headers: {
      "Authorization": `Bearer ${session.token}`
    }
  });

  // request signed upload token
  return replays.post(payload);

};


function putToDestination (file, signed) {

  // the content type and ACL are
  // both required parts of this
  // request, because of what was
  // included in the signature body
  return fetchival.fetch(signed.url, {
    body: file,
    method: 'put',
    headers: {
      "Content-Type": "binary/octet-stream"
    }
  });

};


/**
 * Module exports
 */

export default {
  remove: remove,
  getAll: getAll,
  getById: getById,
  toggleSharing: toggleSharing,
  putToDestination: putToDestination,
  getDownloadSource: getDownloadSource,
  getUploadDestination: getUploadDestination
};
