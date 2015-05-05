var db = require('nano')('http://localhost:5984/lol');

/**
 * save an account to the database
 */
exports.insert = function insert (account, callback) {

  // account is specified by the `account` type
  account.type = "account";

  // document creation date
  account.dateCreated = Date.now();

  // insert the account into couchdb
  db.insert(account, callback);

};
