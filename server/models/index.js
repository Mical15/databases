const { Callbacks } = require('jquery');
const { countBy } = require('underscore');
var db = require('../db');
var Sequelize = require('sequelize');


// var db = new Sequelize('chat', 'root', 'TRIgun947334');
/* TODO this constructor takes the database name, username, then password.
 * Modify the arguments if you need to */

/* first define the data structure by giving property names and datatypes
 * See http://sequelizejs.com for other datatypes you can use besides STRING. */
// var User = db.define('User', {
//   username: Sequelize.STRING
// });

// var Message = db.define('Message', {
//   userid: Sequelize.INTEGER,
//   text: Sequelize.STRING,
//   roomname: Sequelize.STRING
// });

module.exports = {
  messages: {
    get: function (Callback) {
      var sql = 'SELECT * FROM messages';
      db.query(sql, function(err, result) {
        if (err) {
          Callback(err);
        } else {
          console.log('MODEL RESULT Messages: ' + result);
          Callback(null, result);
        }
      });
    },

    post: function (username, messagetext, roomname, Callback) {
      var sql = `INSERT INTO messages (username, messagetext, roomname) VALUES (${username}, ${messagetext}, ${roomname})`;
      db.query(sql, function(err, result) {
        if (err) {
          Callback(err);
        } else {
          Callback(null, result);
        }
      });
    }
  },

  users: {
    get: function (Callback) {
      var sql = 'SELECT * FROM users';
      db.query(sql, function (err, result) {
        if (err) {
          Callback(err);
        } else {
          console.log('MODEL RESULT users: ' + result);
          Callback(null, result);
        }
      });
    },
    post: function (username, Callback) {
      count = 1;
      var sql = `INSERT INTO users (userID, username) VALUES (${count}, ${username})`;
      db.query(sql, function(err, result) {
        if (err) {
          Callback(err);
        } else {
          Callback(null, result);
        }
      });
    }
  }
};