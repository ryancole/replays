"use strict";

var crypto = require('crypto');
var db = require('nano')('http://localhost:5984/lol');

// hash seed
var HASH_SEED = 'lol';

/**
 * save an account to the database
 */
exports.insert = function insert (account, callback) {

  // initialize the hasher
  let hash = crypto.createHmac('sha512', HASH_SEED);

  // add password to hash
  hash.update(account.password);

  // account is specified by the `account` type
  account.type = "account";

  // hash the password
  account.password = hash.digest('hex');

  // document creation date
  account.dateCreated = Date.now();

  // insert the account into couchdb
  db.insert(account, callback);

};

/**
 * fetch a single account with a
 * specific primary id
 */
exports.getById = function getById (id, callback) {

  db.get(id, function (err, body) {

    if (err) {
      return callback(err);
    }
    
    return callback(null, body);

  });

};

/**
 * fetch a single account with a
 * given username and password
 */
exports.getByUsernameAndPassword = function getByUsernameAndPassword (username, password, callback) {

  // filter results by key
  let filter = {
    keys: [ username.toLowerCase() ]
  };

  // fetch accouts with the given username
  db.view('accounts', 'byUsername', filter, function (err, body) {

    if (err) {
      return callback(err);
    }

    // initialize the hasher
    let hash = crypto.createHmac('sha512', HASH_SEED);

    // add password to hash
    hash.update(password);

    // change password to hashed version
    password = hash.digest('hex');

    // find records with the given password
    let account = body.rows.find(function (element, index, array) {

      if (element.value.password == password) {
        return true;
      }

      return false;
      
    });

    if (account === undefined) {
      return callback(Error('failed to locate account'));
    }

    return callback(null, account.value);

  });

};
