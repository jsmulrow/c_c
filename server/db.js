'use strict';

var mongoose = require('mongoose');
var Promise = require('bluebird'); 
Promise.promisifyAll(mongoose);

// load models
// require('./api');

// var databaseURI = 'mongodb://localhost:27017/college_cleaners';
var databaseURI = 'mongodb://jsmulrow:college@ds031862.mongolab.com:31862/college-cleaners';

var db = mongoose.connect(databaseURI).connection;

db.on('open', function () {
	console.log('Database connection successfully opened');
});

db.on('error', function (err) {
	console.error('Database connection error', err);
});

module.exports = db;