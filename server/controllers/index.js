const { Callbacks } = require('jquery');
var models = require('../models');
const headers = require('./cors');

module.exports = {
  messages: {
    get: function (req, res) {
      models.messages.get( (err, result) => {
        Message.findAll()
          .complete(function (err, results) {
            if (err) {
              console.log(err);
              res.status(400).send('error: ' + err);
            } else {
              res.status(200).send(result);
            }
          });
      });
    },
    post: function (req, res) {
      Message.create({username: req.body.username, messagetext: req.body.messagetext, roomname: req.body.roomname})
        .complete(function (err, results) {
          if (err) {
            console.log(err);
            res.status(400).send('error: ' + err);
          } else {
            res.status(200).send('result: ' + result);
          }
        });
    }
  },

  users: {
    get: function (req, res) {
      User.findAll()
        .complete(function(err, results) {
          if (err) {
            console.log(err);
            res.status(400).send('error: ' + err);
          } else {
            res.status(200).send(result);
          }
        });
    },
    post: function (req, res) {
      User.create({username: req.username})
        .complete(function (err, result) {
          if (err) {
            console.log(err);
            res.status(400).send('error: ' + err);
          } else {
            res.status(200).send('result: ' + result);
          }
        });
    }
  }
};
