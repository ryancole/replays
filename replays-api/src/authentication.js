var accounts = require('./repository/account');

exports.validate = function validate (token, callback) {
    
  console.log(token);

  callback(null, true, {
    username: "ryancole"
  });

};
