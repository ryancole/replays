import fetchival from 'fetchival';
import Settings from '../../settings';


const api = fetchival(Settings.API_ADDR, {
  mode: "cors"
});


function create (username, password) {

  let payload = {
    username: username,
    password: password
  };

  // configure api endpoint
  let accounts = api('account');

  // create new account
  return accounts.post(payload);

}


function getByActiveSession (session) {

  // configure api endpoint
  let accounts = api("account", {
    headers: {
      "Authorization": `Bearer ${session.token}`
    }
  });

  // fetch account details
  return accounts(session.account.id).get();

}


export default {
  create: create,
  getByActiveSession: getByActiveSession
};
