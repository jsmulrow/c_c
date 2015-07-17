// var express = require('express');
// var router = express.Router();

// // load mongoose models
// var models = require('../models/models');

// // // create routes for API

// // return all users
// router.get('/users', function(req, res, next) {
// 	models.User.find({}).exec()
// 	.then(function(users) {
// 		res.json(users);
// 	})
// 	// error handler
// 	.then(null, next);
// });

// // return one user - only searches by email
// router.get('/user', function(req, res, next) {
// 	// supports queries by email or username, or both
// 	var query = {};
// 	if (req.query.email) {
// 		query.email = req.query.email;
// 	}
// 	if (req.query.username) {
// 		query.username = req.query.username;
// 	}
// 	if (req.query.name) {
// 		query.name = req.query.name;
// 	}

// 	models.User.findOne(query).exec()
// 		.then(function(user) {
// 			if (user) {
// 				res.json(user);
// 			} else {
// 				res.json(null);
// 			}
// 		})
// 		.then(null, next);
// });

// router.get('/users/:id', function(req, res, next) {
// 	// return user with the given id
// 	models.User.findById(req.params.id).exec()
// 		.then(function(user) {
// 			res.json(user);
// 		})
// 		.then(null, next);
// });

// // return all requests
// router.get('/requests', function(req, res, next) {
// 	models.Request.find({}).populate('author').exec()
// 	.then(function(requests) {
// 		res.json(requests);
// 	})
// 	// error handler
// 	.then(null, function(e) {
// 		next(e);
// 	});
// });

// // add a request
// router.post('/requests', function(req, res, next) {
// 	console.log('done', req.body);
// 	var request = new models.Request(req.body);
// 	request.save()
// 		.then(function(data) {
// 			res.json(data);
// 		})
// 		.then(null, function(e) {
// 			console.log(e);
// 			next(e);
// 		});
// });

// // return all messages for a user
// router.get('/users/:userId/messages', function(req, res, next) {
// 	console.log('looking for messages for: ', req.params.userId);

// 	models.Message.find({recipient: req.params.userId})
// 	.then(function(messages) {
// 		res.json(messages);
// 	})
// 	.then(null, next);
// });

// router.post('/users/:userId/messages', function(req, res, next) {
// 	console.log('posting message for: ', req.params.userId);

// 	var message = new models.Message(req.body);
// 	message.save()
// 		.then(function(data) {
// 			res.json(data);
// 		})
// 		.then(null, next);
// });

// router.get('/users/:userId/requests', function(req, res, next) {
// 	console.log('getting requests for: ', req.params.userId);

// 	models.Request.find({author: req.params.userId})
// 		.then(function(requests){
// 			res.json(requests);
// 		})
// 		.then(null, next);
// });
// router.post('/users/:userId/requests', function(req, res, next) {
// 	console.log('getting requests for: ', req.body);
// 	var requestId = req.body.requestId;

// 	models.User.findByIdAndUpdate(
// 		req.params.userId,
// 		{$push: {requests: req.body.requestId}},
// 		function(err, data) {
// 			if (err) next(err);
// 			res.json(data);
// 		}
// 	);
// });

// router.get('/users/:userId/appointments', function(req, res, next) {
// 	console.log('getting appointments for: ', req.params.userId);
	
// 	models.User.findOne({_id: req.params.userId}).populate('appointments')
// 		.then(function(user){
// 			console.log(user);
// 			res.json(user.appointments);
// 		})
// 		.then(null, next);
// });
// router.post('/users/:userId/appointments', function(req, res, next) {
// 	console.log('setting appointments for: ', req.body);

// 	models.User.findByIdAndUpdate(
// 		req.params.userId,
// 		{$push: {appointments: req.body.requestId}},
// 		function(err, data) {
// 			if (err) next(err);
// 			res.json(data);
// 		}
// 	);

// });


// module.exports = router;


'use strict';

var router = require('express').Router();

router.use('/users', require('./users/user.router'));

router.use('/requests', require('./requests/request.router'));

// messages?

module.exports = router;



