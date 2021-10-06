const { Callbacks } = require('jquery');
var models = require('../models');
const headers = require('./cors');

module.exports = {
  messages: {
    get: function (req, res) {
      models.messages.get( (err, result) => {
        if (err) {
          console.log(err);
          res.status(400).send('error: ' + err);
        } else {
          res.status(200).send(result);
        }
      });
    },
    post: function (req, res) {
      models.messages.post(JSON.stringify(req.body.username), JSON.stringify(req.body.message), JSON.stringify(req.body.roomname), (err, result) => {
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
      models.users.get( (err, result) => {
        if (err) {
          console.log(err);
          res.status(400).send('error: ' + err);
        } else {
          res.status(200).send(result);
        }
      });
    },
    post: function (req, res) {
      models.users.post(JSON.stringify(req.body.username), (err, result) => {
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