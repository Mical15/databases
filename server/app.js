var express = require('express');
var db = require('./db');
var cors = require('cors');

// Middleware
var morgan = require('morgan');
var parser = require('body-parser');

// Router
var router = require('./routes.js');

var corsOptions = {
  origin: ['http://example.com', 'http://localhost:3000', 'http:/localhost:5500', 'http://127.0.0.1:5500'],
  optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
};

var app = express();
module.exports.app = app;
app.use(cors(corsOptions));



// Set what we are listening on.
app.set('port', 3000);

// Logging and parsing
app.use(morgan('dev'));
app.use(parser.json());

// Set up our routes
app.use('/classes', router);

// Serve the client files
app.use(express.static(__dirname + '/../client'));

// If we are being run directly, run the server.
if (!module.parent) {
  app.listen(app.get('port'));
  console.log('Listening on', app.get('port'));
}

app.get('/hello', (req, res) => {
  res.send('Hello World!');
});

