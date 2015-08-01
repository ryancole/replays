import "whatwg-fetch";
import Settings from "../../dank.config";


// get all public replays, optionally filtered
// by a specific username, optionally including
// private replays for the active session
export function getAll (session, username) {
  let headers = {};
  let endpoint = `${Settings.API_ADDR}/replay`;
  if (session) {
    headers = {
      "Authorization": `Bearer ${session.token}`
    };
  }
  if (username) {
    endpoint += `?username=${username}`;
  }
  return fetch(endpoint, {
    headers: headers
  })
  .then(response => response.json());
}

// get a single replay, possibly taking into
// consideration the current active user and
// their private replays
export function getById (session, id) {
  let headers = {};
  if (session) {
    headers = {
      "Authorization": `Bearer ${session.token}`
    };
  }
  return fetch(`${Settings.API_ADDR}/replay/${id}`, {
    headers: headers
  })
  .then(response => response.json());
}

// get the pre-signed aws download url
// for the specific replay file
export function getDownloadSource (session, id) {
  return fetch(`${Settings.API_ADDR}/replay/${id}/download`, {
    headers: {
      "Authorization": `Bearer ${session.token}`
    }
  })
  .then(response => response.json());
}

// get the pre-signed aws upload url
// for the specified replay file
export function getUploadDestination (session, file) {
  return fetch(`${Settings.API_ADDR}/replay`, {
    body: JSON.stringify({
      name: file.name,
      size: file.size
    }),
    method: "post",
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${session.token}`
    }
  })
  .then(response => response.json());
}

// upload a specified file to aws using
// the provided pre-signed url
export function putToDestination (file, signed) {
  return fetch(signed.url, {
    body: file,
    method: "put",
    headers: {
      "Content-Type": "binary/octet-stream"
    }
  });
}
