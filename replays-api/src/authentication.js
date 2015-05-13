var accounts = require('./repository/account');

/**
 * validate a given token payload
 */
exports.validate = function validate (token, callback) {

  // fetch the account with the
  // given primary identifier
  accounts.getById(token._id, function (err, account) {

    if (err) {
      return callback(err, false);
    }

    if (account == undefined) {
      return callback(null, false);
    }

    // lets not pass around a user's password
    delete account.password;

    return callback(null, true, account);

  });

};
