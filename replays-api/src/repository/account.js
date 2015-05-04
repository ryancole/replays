var nano = require('nano')('http://localhost:5984/');

exports.insert = function insert (account, callback) {
  var accounts = nano.use('accounts');
  accounts.insert({
    email: 'ryan@rycole.com'
  }, callback);
};
