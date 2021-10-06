//Initialize sequilize
var Sequelize = require('sequelize');
var db = new Sequelize('chat', 'root', 'snake1991');

var User = db.define('User', {
  userIDORM: Sequelize.STRING,
  username: Sequelize.STRING
});

var Messages = db.define('Message', {
  username: Sequelize.INTEGER,
  messagetext: Sequelize.STRING,
  roomname: Sequelize.STRING
});

User.sync({force: true});
Messages.sync({force: true});

exports.User = User;
exports.Message = Messages;