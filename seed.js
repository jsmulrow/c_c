// This file should contain all the record creation needed to seed the database with its default values.
// The data can then be loaded with the node seed.js 

// just some dummy data to use in development
 
var async = require('async'),
    mongoose = require('mongoose');

var models = require('./models/models');
var User = models.User;
var Request = models.Request;

// drop old data
mongoose.connection.on('open', function() {
    mongoose.connection.db.dropDatabase(function() {
        console.log("Dropped old data, now inserting data");
        insertData(0, 2);
    });
});

function insertData(num, counter) {
    var jack = new User({name: 'Jack Mulrow' + num, email: 'jack.mulrow@yale.edu', college: 'Davenport', username: 'jsmulrow', password: 'jack'});
    jack.save(function(e, user) {
        console.log('saved jack', num);
        var jrequest = new Request({title: 'clean my room' + num, author: user._id, dirtiness: 9, payment: 30, times: [3, 4], college: 'Davenport', suite: 'H22', numPeople: 6});
        jrequest.save(function(e, req) {
            console.log('saved jrequest', num);
            var eric = new User({name: 'Eric Ho' + num, email: 'eric.ho@yale.edu', college: 'Davenport', username: 'eho', password: 'eric'});
            eric.save(function(e, user) {
                console.log('saved eric', num);
                var erequest = new Request({title: 'help, please clean' + num, author: user._id, dirtiness: 7, payment: 25, times: [1, 2], college: 'Davenport', suite: 'C23', numPeople: 8});
                erequest.save(function(e, req) {
                    console.log('saved erequest', num);
                    var brandon = new User({name: 'Brandon Morgan' + num, email: 'brandon.morgan@yale.edu', college: 'Davenport', username: 'bmo', password: 'brandon'});
                    brandon.save(function(e, user) {
                        console.log('saved brandon', num);
                        var brequest = new Request({title: 'our room is too grubby' + num, author: user._id, dirtiness: 10, payment: 20, times: [12, 1, 5], college: 'Davenport', suite: 'D23', numPeople: 5});
                        brequest.save(function(e, req) {
                            console.log('saved brequest', num);
                            if (counter > 0) {
                                insertData(num + 1, counter - 1);
                            } else {
                                console.log("Finished inserting data");
                                console.log("Control-C to quit");
                            }
                        });
                    });
                });
            });
        });
    });
}