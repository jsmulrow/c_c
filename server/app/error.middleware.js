'use strict';

var router = require('express').Router();

// router.use(function (err, req, res, next) {
// 	err.status = err.status || 500;
// 	if (process.env.NODE_ENV == 'development') {
// 		console.error(err.stack);
// 	}
// 	res.status(err.status).send(err);
// });

// catch 404 and forward to error handler
router.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (router.get('env') === 'development') {
  router.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
router.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});


module.exports = router;