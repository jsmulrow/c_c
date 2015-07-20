'use strict'; 

var router = require('express').Router(),
	_ = require('lodash');

var HttpError = require('../../utils/HttpError');

var auth = require('../../utils/auth.js');

var Request = require('./request.model');

// return all requests
router.get('/', function(req, res, next) {
	Request.find({}).populate('author').exec()
	.then(function(requests) {
		res.json(requests);
	})
	// error handler
	.then(null, function(e) {
		next(e);
	});
});

// add a request
router.post('/', function(req, res, next) {
	console.log('done', req.body);
	var request = new Request(req.body);
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