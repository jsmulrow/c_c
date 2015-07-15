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
	.then(null, next);
});

// return one user - only searches by email
router.get('/user', function(req, res, next) {
	// supports queries by email or username, or both
	var query = {};
	if (req.query.email) {
		query.email = req.query.email;
	}
	if (req.query.username) {
		query.username = req.query.username;
	}

	models.User.findOne(query).exec()
		.then(function(user) {
			if (user) {
				res.json(user);
			} else {
				res.json(null);
			}
		})
		.then(null, next);
});

router.get('/users/:id', function(req, res, next) {
	// return user with the given id
	models.User.findById(req.params.id).exec()
		.then(function(user) {
			res.json(user);
		})
		.then(null, next);
});

// return all requests
router.get('/requests', function(req, res, next) {
	models.Request.find({}).populate('author').exec()
	.then(function(requests) {
		res.json(requests);
	})
	// error handler
	.then(null, function(e) {
		next(e);
	});
});

// add a request
router.post('/requests', function(req, res, next) {
	console.log('done', req.body);
	var request = new models.Request(req.body);
	request.save()
		.then(function(data) {
			res.json(data);
		})
		.then(null, function(e) {
			console.log(e);
			next(e);
		});
});

module.exports = router;