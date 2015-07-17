'use strict';

var router = require('express').Router(),
	_ = require('lodash');

var HttpError = require('../../utils/HttpError');

var auth = require('../auth.js');

var User = require('./user.model');
var Request = require('../requests/request.model')

// return all users
router.get('/', function(req, res, next) {
	User.find({}).exec()
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
	if (req.query.name) {
		query.name = req.query.name;
	}

	User.findOne(query).exec()
		.then(function(user) {
			if (user) {
				res.json(user);
			} else {
				res.json(null);
			}
		})
		.then(null, next);
});

router.get('/:id', function(req, res, next) {
	// return user with the given id
	User.findById(req.params.id).exec()
		.then(function(user) {
			res.json(user);
		})
		.then(null, next);
});

// return all messages for a user
router.get('/:userId/messages', function(req, res, next) {
	console.log('looking for messages for: ', req.params.userId);

	Message.find({recipient: req.params.userId})
	.then(function(messages) {
		res.json(messages);
	})
	.then(null, next);
});

router.post('/:userId/messages', function(req, res, next) {
	console.log('posting message for: ', req.params.userId);

	var message = new Message(req.body);
	message.save()
		.then(function(data) {
			res.json(data);
		})
		.then(null, next);
});

router.get('/:userId/requests', function(req, res, next) {
	console.log('getting requests for: ', req.params.userId);

	Request.find({author: req.params.userId})
		.then(function(requests){
			res.json(requests);
		})
		.then(null, next);
});
router.post('/:userId/requests', function(req, res, next) {
	console.log('getting requests for: ', req.body);
	var requestId = req.body.requestId;

	User.findByIdAndUpdate(
		req.params.userId,
		{$push: {requests: req.body.requestId}},
		function(err, data) {
			if (err) next(err);
			res.json(data);
		}
	);
});

router.get('/:userId/appointments', function(req, res, next) {
	console.log('getting appointments for: ', req.params.userId);
	
	User.findOne({_id: req.params.userId}).populate('appointments')
		.then(function(user){
			console.log(user);
			res.json(user.appointments);
		})
		.then(null, next);
});
router.post('/:userId/appointments', function(req, res, next) {
	console.log('setting appointments for: ', req.body);

	User.findByIdAndUpdate(
		req.params.userId,
		{$push: {appointments: req.body.requestId}},
		function(err, data) {
			if (err) next(err);
			res.json(data);
		}
	);

});


module.exports = router;