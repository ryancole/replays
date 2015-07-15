import 'whatwg-fetch';
import Settings from '../../dank.config';


function getDownloadSource (session, id) {

  return fetch(`${Settings.API_ADDR}/replay/${id}/download`, {
    headers: {
      "Authorization": `Bearer ${session.token}`
    }
  })
  .then(response => response.json());

};


function getUploadDestination (session, file) {

  let payload = {
    name: file.name,
    size: file.size
  };

  return fetch(`${Settings.API_ADDR}/replay`, {
    body: JSON.stringify(payload),
    method: 'post',
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${session.token}`
    }
  })
  .then(response => response.json());

};


function putToDestination (file, signed) {

  // the content type and ACL are
  // both required parts of this
  // request, because of what was
  // included in the signature body
  return fetch(signed.url, {
    body: file,
    method: 'put',
    headers: {
      "Content-Type": "binary/octet-stream"
    }
  });

};


export default {
  putToDestination: putToDestination,
  getDownloadSource: getDownloadSource,
  getUploadDestination: getUploadDestination
};