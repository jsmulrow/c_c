// This file should contain all the record creation needed to seed the database with its default values.
// The data can then be loaded with the node seed.js 

// just some dummy data to use in development
 
var async = require('async'),
    mongoose = require('mongoose');

var models = require('./models/models');
var Place = models.Place;
 
var data = {
    User: [
        {name: 'Jack Mulrow', email: 'jack.mulrow@yale.edu', college: 'Davenport'},
        {name: 'Eric Ho', email: 'eric.ho@yale.edu', college: 'Davenport'},
        {name: 'Brandon Morgan', email: 'brandon.morgan@yale.edu', college: 'Davenport'}
    ],
    Request: [
        // jack is the author
        {title: 'clean my room', author: '559fd715e2139173344a71c6', dirtiness: 9, payment: 30, times: [3, 4], college: 'Davenport', suite: 'H22', numPeople: 6},
        // eric is the author
        {title: 'help, please clean', author: '559fd715e2139173344a71c7', dirtiness: 7, payment: 25, times: [1, 2], college: 'Davenport', suite: 'C23', numPeople: 8},
        // brandon is the author
        {title: 'our room is too grubby', author: '559fd715e2139173344a71c8', dirtiness: 10, payment: 20, times: [12, 1, 5], college: 'Davenport', suite: 'D23', numPeople: 5}

    ]
};
 
mongoose.connection.on('open', function() {
    mongoose.connection.db.dropDatabase(function() {
        
        console.log("Dropped old data, now inserting data");
        async.each(Object.keys(data),
            function(modelName, outerDone) {
                async.each(data[modelName],
                    function(d, innerDone) {
                        models[modelName].create(d, innerDone);
                    },
                    outerDone
                );
            },
            function(err) {
                console.log("Finished inserting data");
                console.log("Control-C to quit");
            }
        );
    });
});