"use strict";

var pg = require('pg');
var crypto = require('crypto');
var settings = require('../../settings');


/**
 * save an account to the database
 */

exports.insert = function insert (account, callback) {

  // initialize the hasher
  let hash = crypto.createHmac('sha512', settings.HASH_SEED);

  // add password to hash
  hash.update(account.password);

  // hash the password
  let password = hash.digest('hex');

  pg.connect(settings.AWS_SQL, (err, db, done) => {

    if (err) {
      return callback(err);
    }

    const query = `
      INSERT INTO accounts
      (username, password)
      VALUES
      ($1, $2)
      RETURNING id
    `;

    const params = [
      account.username,
      password
    ];

    db.query(query, params, (err, result) => {

      if (err) {
        return callback(err);
      } else if (result.rowCount != 1) {
        return callback(Error("failed to insert"));
      }

      done();

      return callback(null, result.rows[0]);

    });

  });

};


/**
 * get an account by username
 */

exports.getByUsername = function getByUsername (username, callback) {

  pg.connect(settings.AWS_SQL, (err, db, done) => {

    if (err) {
      return callback(err);
    }

    const query = `
      SELECT *
      FROM accounts
      WHERE LOWER(username) = $1
    `;

    const params = [
      username.toLowerCase()
    ];

    db.query(query, params, (err, result) => {

      if (err) {
        return callback(err);
      }

      done();

      return callback(null, result);

    });

  });

};


/**
 * fetch a single account with a
 * given username and password
 */

exports.getByUsernameAndPassword = function getByUsernameAndPassword (username, password, callback) {

  pg.connect(settings.AWS_SQL, (err, db, done) => {

    if (err) {
      return callback(err);
    }

    // initialize the hasher
    let hash = crypto.createHmac('sha512', settings.HASH_SEED);

    // add password to hash
    hash.update(password);

    // change password to hashed version
    password = hash.digest('hex');

    const query = `
      SELECT id, username, create_date
      FROM accounts
      WHERE LOWER(username) = $1 AND password = $2
    `;

    const params = [
      username.toLowerCase(),
      password
    ];

    db.query(query, params, (err, result) => {

      if (err) {
        return callback(err);
      } else if (result.rowCount != 1) {
        return callback(Error("failed to select"));
      }

      done();

      return callback(null, result.rows[0]);

    });

  });

};
