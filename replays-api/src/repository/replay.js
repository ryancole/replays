"use strict";

var pg = require('pg');
var settings = require('../../settings');


/**
 * save a replay to the database
 */

exports.insert = function insert (replay, callback) {

  pg.connect(settings.AWS_SQL, (err, db, done) => {

    if (err) {
      return callback(err);
    }

    const query = `
      INSERT INTO replays
      (filename, size, account)
      VALUES
      ($1, $2, $3)
    `;

    const params = [
      replay.filename,
      replay.size,
      replay.account
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
 * fetch single replay by id
 */

exports.get = function get (id, callback) {

  pg.connect(settings.AWS_SQL, (err, db, done) => {

    if (err) {
      return callback(err);
    }

    const query = `
      SELECT r.*, a.username
      FROM replays AS r
      JOIN accounts AS a ON r.account = a.id
      WHERE r.id = $1
    `;

    const params = [
      id
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
 * fetch all replays keyed by id
 */

exports.getAll = function getAllById (callback) {

  pg.connect(settings.AWS_SQL, (err, db, done) => {

    if (err) {
      return callback(err);
    }

    const query = `
      SELECT r.*, a.username
      FROM replays AS r
      JOIN accounts AS a ON r.account = a.id
      ORDER BY r.id DESC
    `;

    db.query(query, (err, result) => {

      if (err) {
        return callback(err);
      }

      done();

      return callback(null, result.rows);

    });

  });

};


/**
 * fetch all replays with an account id
 */

exports.getAllByAccountId = function getAllByAccountId (id, callback) {

  pg.connect(settings.AWS_SQL, (err, db, done) => {

    if (err) {
      return callback(err);
    }

    const query = `
      SELECT r.*, a.username
      FROM replays AS r
      JOIN accounts AS a ON r.account = a.id
      WHERE r.account = $1
    `;

    const params = [
      id
    ];

    db.query(query, params, (err, result) => {

      if (err) {
        return callback(err);
      }

      done();

      return callback(null, result);

    });

  });

}
