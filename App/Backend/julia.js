// // getting-started.js
// var mongoose = require('mongoose');
// mongoose.connect('mongodb://localhost/test');

// var db = mongoose.connection;

// db.on('error', console.error.bind(console, 'connection error:'));
// db.once('open', function() {
//   // we're connected!

// console.log('Hey Clara')

// });



// const mongoose = require('mongoose');
// mongoose.connect('mongodb://localhost/test');

// const Appointment = mongoose.model('Appointment', { Date: String });

// const Carer = new Appointment({ Date: '25 Nov' });
// Carer.save().then(() => console.log('ID'));

// ---------------------

// Connect to MongoDB

// //Import the mongoose module
// var mongoose = require('mongoose');

// //Set up default mongoose connection
// var mongoDB = 'mongodb://localhost/test';
// mongoose.connect(mongoDB);
// // Get Mongoose to use the global promise library
// mongoose.Promise = global.Promise;
// //Get the default connection
// var db = mongoose.connection;

// //Bind connection to error event (to get notification of connection errors)
// db.on('error', console.error.bind(console, 'MongoDB connection error:'));

// ---------------------

//Set up mongoose connection
var mongoose = require('mongoose');
var mongoDB = 'mongodb://localhost/models';
mongoose.connect(mongoDB);
mongoose.Promise = global.Promise;
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));