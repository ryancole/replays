"use strict";

var pg = require('pg');
var aws = require('aws-sdk');
var settings = require('../../settings');


exports.insert = function insert (replay, callback) {

  let s3 = new aws.S3({
    region: 'us-west-2'
  });

  // prepare the signature payload, remember
  // this means the client must provide the
  // same ACL and content-type when using PUT
  const params = {
    Key: replay.aws_key,
    Bucket: settings.AWS_S3_BUCKET,
    Expires: 315360000
  };

  // request a signed url from S3
  s3.getSignedUrl('getObject', params, (err, url) => {

    if (err) {
      return callback(err);
    }

    pg.connect(settings.AWS_SQL, (err, db, done) => {

      if (err) {
        return callback(err);
      }

      const query = `
        INSERT INTO links
        (replay_id, source)
        VALUES
        ($1, $2)
        RETURNING *
      `;

      const params = [
        replay.id,
        url
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

  });

};


/**
 * fetch all links with an account id
 */

exports.getAllByAccountId = function getAllByAccountId (id, callback) {

  pg.connect(settings.AWS_SQL, (err, db, done) => {

    if (err) {
      return callback(err);
    }

    const query = `
      SELECT l.*
      FROM links AS l
      JOIN replays AS r ON r.id = l.replay_id
      JOIN accounts AS a ON a.id = r.account_id
      WHERE a.id = $1
    `;

    const params = [
      id
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