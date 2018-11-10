// const MongoClient = require('mongodb').MongoClient;
// const assert = require('assert');
 
// // Connection URL
// const url = 'mongodb://localhost:27017';
 
// // Database Name
// const dbName = 'myproject';
 
// // Use connect method to connect to the server
// MongoClient.connect(url, function(err, client) {
//   assert.equal(null, err);
//   console.log("Connected successfully to server");
 
//   const db = client.db(dbName);
 
//   client.close();
// });

// const insertDocuments = function(db, callback) {
//   // Get the documents collection
//   const collection = db.collection('documents');
//   // Insert some documents
//   collection.insertMany([
//     {a : 1}, {a : 2}, {a : 3}
//   ], function(err, result) {
//     assert.equal(err, null);
//     assert.equal(3, result.result.n);
//     assert.equal(3, result.ops.length);
//     console.log("Inserted 3 documents into the collection");
//     callback(result);
//   });
// }

// const MongoClient = require('mongodb').MongoClient;
// const assert = require('assert');
 
// // Connection URL
// const url = 'mongodb://localhost:27017';
 
// // Database Name
// const dbName = 'myproject';
 
// // Use connect method to connect to the server
// MongoClient.connect(url, function(err, client) {
//   assert.equal(null, err);
//   console.log("Connected successfully to server");
 
//   const db = client.db(dbName);
 
//   insertDocuments(db, function() {
//     client.close();
//   });
// });

//const mongoose = require('mongoose');

// Connect to mongodb in one line
//mongooose.connect('mongodb://localhost/apptdb');

var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/apptdb');
// Last one is the specific DATABASE we want to connect to (apptdb) -> if it doesnt exist create it

// Listen for when the connection is successfully made
// Event - just listen once connection is open we file the function

mongoose.connection.once('open', function(){
	console.log('Connection has been made, now make fireworks');

// Listen for every error
}).on('error', function(error){
console.log('Connection error:', error);
});

// Mongodb running inside computer and within you can have multiple database (we will have 4)

// const MongoClient = require('mongodb').MongoClient;
// const assert = require('assert');
 
// // Connection URL
// const url = 'mongodb://localhost:27017';


















