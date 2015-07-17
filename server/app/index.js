'use strict'; 

var app = require('express')();
var path = require('path');

app.use(require('./logging.middleware'));

app.use(require('./session.middleware'));

app.use(require('./sass.middleware'));

app.use(require('./requestState.middleware'));

app.use(require('./statics.middleware'));

app.use('/api', require('../api'));

// app.get('/*', function (req, res) {
// 	var index = path.join(__dirname, '..', '..', 'public', 'index.html');
// 	res.sendFile(index);
// });

/* GET home page. */
var index = path.join(__dirname, '..', '..', 'public', 'index.html');
app.get('/', function(req, res, next) {
    res.sendFile(index);
});

/////// keep it?
// authentication - passport.js
require('./passport.js')(app);

app.use(require('./error.middleware'));

module.exports = app;