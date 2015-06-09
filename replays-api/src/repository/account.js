"use strict";

// application settings
var settings = require('../../settings');

var db = require('nano')(settings.COUCHDB_ADDR);
var crypto = require('crypto');


/**
 * save an account to the database
 */

exports.insert = function insert (account, callback) {

  // initialize the hasher
  let hash = crypto.createHmac('sha512', settings.HASH_SEED);

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
 * get an account by id
 */

exports.getById = function getById (id, callback) {

  // filter results by key
  let filter = {
    keys: [ id ]
  };

  // fetch account with given id
  db.view('accounts', 'byId', filter, function (err, body) {

    if (err) {
      return callback(err);
    } else if (body.rows.length != 1) {
      return callback(Error('failed to locate account'));
    }

    // extract the account
    let account = body.rows[0].value;

    // don't pass around the password
    // or the document revision
    delete account._rev;
    delete account.password;

    // provide the single account
    return callback(null, account);

  });

};


/**
 * get an account by username
 */

exports.getByUsername = function getByUsername (username, callback) {

  // filter results by key
  let filter = {
    keys: [ username.toLowerCase() ]
  };

  // fetch accounts with given username
  db.view('accounts', 'byUsername', filter, function (err, body) {

    if (err) {
      return callback(err);
    } else if (body.rows.length != 1) {
      return callback(Error('failed to locate account'));
    }

    // extract the account
    let value = body.rows[0].value;

    // lets be explicit about what
    // values we pass through
    let account = {
      _id: value._id,
      username: value.username,
      dateCreated: value.dateCreated
    };

    // provide the single account
    return callback(null, account);

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
    let hash = crypto.createHmac('sha512', settings.HASH_SEED);

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
