module.exports = function(app) {

  // mongo User database
  var User = require('../api/users/user.model');

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
    // passport.authenticate('local', {
    //   successRedirect: '/successLogin',
    //   failureRedirect: '/failLogin',
    //   failureFlash: false
    // })
    function(req, res, next) {
      User.findOne({username: req.body.username}).exec()
        .then(function(user) {
          if (!user) res.send('no user');
          if (!user.validPassword(req.body.password)) res.send('bad pswd');
          res.json(user);
        });
    }
  );

  app.post('/register', function(req, res, next) {
    var newUser = new User(req.body);
    newUser.save(function(err, data) {
      res.json(data);
    });
  });

  app.get('/successLogin', function(req, res, next) {
    res.json('success');
  });

  app.get('/failLogin', function(req, res, next) {
    res.json('failed');
  });


};
