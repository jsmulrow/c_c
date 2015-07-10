var express = require('express');
var router = express.Router();

// load mongoose models
var models = require('../models/models');

// create routes for API

// return all users
router.get('/users', function(req, res, next) {
	models.User.find({}).exec()
	.then(function(users) {
		res.json(users);
	})
	// error handler
	.then(null, function(e) {
		next(e);
	});
});

// return all requests
router.get('/requests', function(req, res, next) {
	models.Request.find({}).exec()
	.then(function(requests) {
		res.json(requests);
	})
	// error handler
	.then(null, function(e) {
		next(e);
	});
});

module.exports = router;