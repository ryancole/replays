"use strict";

var pg = require('pg');
var settings = require('../../settings');


/**
 * disable sharing of a replay
 */

exports.disableSharing = function disableSharing (id, account, callback) {

  pg.connect(settings.AWS_SQL, (err, db, done) => {

    if (err) {
      return callback(err);
    }

    const query = `
      UPDATE replays
      SET public = false
      WHERE id = $1 AND account_id = $2
    `;

    const params = [
      id,
      account
    ];

    db.query(query, params, (err, result) => {

      if (err) {
        return callback(err);
      } else if (result.rowCount != 1) {
        return callback(Error("failed to update"));
      }

      done();

      return callback(null, true);

    });

  });

};


/**
 * enable sharing of a replay
 */

exports.enableSharing = function enableSharing (id, account, callback) {

  pg.connect(settings.AWS_SQL, (err, db, done) => {

    if (err) {
      return callback(err);
    }

    const query = `
      UPDATE replays
      SET public = true
      WHERE id = $1 AND account_id = $2
    `;

    const params = [
      id,
      account
    ];

    db.query(query, params, (err, result) => {

      if (err) {
        return callback(err);
      } else if (result.rowCount != 1) {
        return callback(Error("failed to update"));
      }

      done();

      return callback(null, true);

    });

  });

};


/**
 * remove a replay
 */

exports.remove = function remove (id, account, callback) {

  pg.connect(settings.AWS_SQL, (err, db, done) => {

    if (err) {
      return callback(err);
    }

    const query = `
      DELETE FROM replays
      WHERE id = $1 AND account_id = $2
    `;

    const params = [
      id,
      account
    ];

    db.query(query, params, (err, result) => {

      if (err) {
        return callback(err);
      } else if (result.rowCount != 1) {
        return callback(Error("failed to remove"));
      }

      done();

      return callback(null, true);

    });

  });

};


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
      (filename, size, account_id, aws_key)
      VALUES
      ($1, $2, $3, $4)
      RETURNING id
    `;

    const params = [
      replay.filename,
      replay.size,
      replay.account_id,
      replay.aws_key
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
 * fetch single replay by id
 */

exports.get = function get (id, account, callback) {

  pg.connect(settings.AWS_SQL, (err, db, done) => {

    if (err) {
      return callback(err);
    }

    const query = `
      SELECT *
      FROM replays
      WHERE id = $1 AND account_id = $2
    `;

    const params = [
      id,
      account
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


/**
 * fetch all replays
 */

exports.getAll = function getAll (callback) {

  pg.connect(settings.AWS_SQL, (err, db, done) => {

    if (err) {
      return callback(err);
    }

    const query = `
      SELECT *
      FROM replays
      WHERE public != true
      ORDER BY id DESC
    `;

    db.query(query, (err, result) => {

      if (err) {
        return callback(err);
      }

      done();

      return callback(null, result.rows);

    });

  });

}


/**
 * fetch all replays with an account username
 */

exports.getAllByAccountUsername = function getAllByAccountId (accountUsername, includePrivate, callback) {

  pg.connect(settings.AWS_SQL, (err, db, done) => {

    if (err) {
      return callback(err);
    }

    const query = `
      SELECT r.*
      FROM replays AS r
      JOIN accounts AS a ON a.id = r.account_id
      WHERE LOWER(a.username) = $1 AND (r.public = true OR r.public = $2)
      ORDER BY r.id DESC
    `;

    const params = [
      accountUsername.toLowerCase(),
      includePrivate
    ];

    db.query(query, params, (err, result) => {

      if (err) {
        return callback(err);
      }

      done();

      return callback(null, result.rows);

    });

  });

}