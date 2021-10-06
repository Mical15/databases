var mysql = require('mysql');

// Create a database connection and export it from this file.
// You will need to connect with the user "root", no password,
// and to the database "chat".
var connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'snake1991',
  database: 'chat',
  insecureAuth: true
});

// var connection = mysql.createConnection({
//   host: 'localhost',
//   user: 'root',
//   password: 'TRIgun947334',
//   database: 'chat',
//   insecureAuth: true
// });

connection.connect(function(err) {
  if (err) {
    console.log(err);
  }
  console.log('Connected!');
});

module.exports = connection;

