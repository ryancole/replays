import "whatwg-fetch";
import Settings from "../../dank.config";


// get a single account with a specific
// username
export function get (session, username) {
  let headers = {};
  if (session) {
    headers.Authorization = `Bearer ${session.token}`;
  }
  return fetch(`${Settings.API_ADDR}/account/${username}`, {
    headers: headers
  })
  .then(response => response.json());
}
