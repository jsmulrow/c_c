var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
// just for now
var ejs = require('ejs');

// session support
// var session = require('express-session');

// // authentication
// var passport = require('passport');
// var LocalStrategy = require('passport-local').Strategy;
// passport.use(new LocalStrategy(
//   function(username, password, done) {
//     User.findOne({username: username}, function(err, user) {
//       if (err) {return done(err);}
//       if (!user) {
//         return done(null, false, {message: 'Incorrect username.'});      
//       }
//       if (!user.validPassword(password)) {
//         return done(null, false, {message: 'Incorrect password.'});
//       }
//       return done(null, user);
//     });
//   }
// ));

var routes = require('./routes/index');
var users = require('./routes/users');
var api = require('./routes/api');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
// try to get rid of this -- using angular instead
app.set('view engine', 'ejs');

// // set up express
app.use(favicon(__dirname + '/public/favicon.ico'));
// debuggin
app.use(logger('dev'));
// parsing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
// static files
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'bower_components')));
// authentication - passport.js
// app.use(session({ secret: 'keyboard cat'}));
// app.use(passport.initialize());
// app.use(passport.session());


// authentication - passport.js
require('./passport.js')(app);

// route handlers
app.use('/', routes);
app.use('/users', users);
app.use('/api', api);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});


module.exports = app;
