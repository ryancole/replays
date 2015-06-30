import fetch from 'isomorphic-fetch';
import fetchival from 'fetchival';
import settings from '../AppSettings';


const api = fetchival(settings.get("API_ADDR"), {
  mode: "cors"
});


function create (session, replay) {

  let links = api("link", {
    headers: {
      "Authorization": `Bearer ${session.token}`
    }
  });

  let payload = {
    replay: replay.id
  };

  return links.post(payload);

};


function getAll (session) {

  let links = api("link", {
    headers: {
      "Authorization": `Bearer ${session.token}`
    }
  });

  return links.get();

}


/**
 * Module exports
 */

export default {
  create: create,
  getAll: getAll
};
