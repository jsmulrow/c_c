var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var api = require('./routes/api');

var app = express();

app.set('view engine', 'jade');

// // set up express
app.use(favicon(__dirname + '/public/favicon.ico'));

// debugging
app.use(logger('dev'));
// parsing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
// static files
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'browser')));
app.use(express.static(path.join(__dirname, 'bower_components')));

// authentication - passport.js
require('./passport.js')(app);

// // route handlers
app.use('/api', require('../api'));

/* GET home page. */
var index = path.join(__dirname, '..', '..', 'public', 'index.html');
app.get('/', function(req, res, next) {
    res.sendFile(index);
});
app.get('/*', function (req, res) {
  res.sendFile(index);
});

app.use(require('./error.middleware'));

module.exports = app;
