import fetchival from 'fetchival';
import settings from '../AppSettings';


const api = fetchival(settings.get("API_ADDR"), {
  mode: "cors"
});


function create (username, password) {

  let payload = {
    username: username,
    password: password
  };

  // configure api endpoint
  let sessions = api('session');

  // create new session
  return sessions.post(payload);

};


export default {
  create: create
};
