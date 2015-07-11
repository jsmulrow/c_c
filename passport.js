module.exports = function(app) {

  // mongo User database
  var User = require('./models/models').User;

  // authentication
  var passport = require('passport');
  var LocalStrategy = require('passport-local').Strategy;
  passport.use(new LocalStrategy(
    function(username, password, done) {
      User.findOne({username: username}, function(err, user) {
        console.log(user);
        if (err) {return done(err);}
        if (!user) {
          console.log('no user');
          return done(null, false, {message: 'Incorrect username.'});      
        }
        if (!user.validPassword(password)) {
          console.log('bad psw');
          return done(null, false, {message: 'Incorrect password.'});
        }
        console.log('passed');
        return done(null, user);
      });
    }
  ));

  app.use(passport.initialize());
  app.use(passport.session());

  passport.serializeUser(function(user, done) {
    done(null, user._id);
  });

  passport.deserializeUser(function(id, done) {
    done(err, user);
  });

  app.post('/login',
    passport.authenticate('local', {
      successRedirect: '/successLogin',
      failureRedirect: '/failLogin',
      failureFlash: false
    })
  );

  app.get('/successLogin', function(req, res, next) {
    User.findOne({})
    res.json('success');
  });

  app.get('/failLogin', function(req, res, next) {
    res.json('failed');
  });


};
