'use strict'; 

var mongoose = require('mongoose'),
	shortid = require('shortid'),
	crypto = require('crypto'),
	_ = require('lodash');

var db = require('../../db');

var Schema = mongoose.Schema;

// store requests for cleaning
var requestSchema = new Schema({
	title: String,
	author: {type: Schema.Types.ObjectId, ref: 'User'},
	dirtiness: {type: Number, min: 1, max: 10},
	payment: Number,
	times: [String],
	college: String,
	suite: String,
	numPeople: Number
});

module.exports = db.model('Request', requestSchema);