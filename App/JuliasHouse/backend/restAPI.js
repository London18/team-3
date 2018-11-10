// CLIENT SIDE

// Front end HTML calls functions in fetch.js
// Fetch.js uses fetch to create http call
// HTTP call is made to rest API


// SERVER SIDE

// HTTP call is picked up by rest API, index.js
// NodeJS processes HTTP call
// Uses Mongoose to talk to the MongoDB



// Run this by typing in: node index.js

// Request receives the info from the web page
// Response sends info to the web page



var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("mydb");
  dbo.createCollection("appointments", function(err, res) {
    if (err) throw err;
    console.log("Collection created!");
    db.close();
  });

  var dbo = db.db("mydb");
  var myobj = {"Date": "22/11/1993", "Carer_ID": "56"}
  dbo.collection("appointments").insertOne(myobj, function(err, res) {
    if (err) throw err;
    console.log("1 document inserted");
   });
    
});


// We are using Express
var express = require("express");
var app = express();

// When port 3000 is accessed, the log reports
app.listen(400, () => {
 console.log("Server running on port 400");
});

app.use(express.json());


// Get list of appointments
app.get('/appointments', function(req,res){
	


	 console.log("Getting list of appointments");


var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("mydb");
  dbo.collection("appointments").findOne({}, function(err, result) {
    if (err) throw err;
    console.log(result);
    db.close();
 });
	
});

/*
	var MongoClient = require('mongodb').MongoClient;

	MongoClient.connect("mongodb://localhost:27017/JuliaHouse", function(err, db){
	if(!err) {
		console.log("We are connected.")
	}
	db.appointments.insert({"Date": "22/11/1993", "Carer_ID": "56"});
	response = db.appointments.find([1]);
})

*/
	 //res.json(result); 

	 // Send JSON file in response to the webpage
	 res.json(["Tony","Lisa"]);
	
	 res.end();
});


// Update status
app.put('/status', function(req,res){
	
	// Interpret request from web page containing JSON data 
	console.log("Updating status");
	console.log(req.body); 
	res.end();
});


app.get('/login', function(req,res){
	// Login
	console.log("Checking login");

	res.send("password000");

	res.end();
});

app.post('/create', function(req,res){
	// Create nurse/family/appointment
	console.log("Creating object");
	res.end();
});



// From @jeffanderson Medium article:
// A route has 3 parts:
// HTTP method associated with the request we want to capture: app.get()
// URL of the request we want to capture: app.get('/');
// A handler function: app.get('/', function(req, res) { });
// Example empty route:
/*
app.get('/', function(req, res) {
	console.log("Received your request!")
  // We must end the request when we are done handling it
  res.end();
});
*/
// GET — retrieve a particular resource’s object or list all objects
// POST — create a new resource’s object
// PATCH — make a partial update to a particular resource’s object
// PUT — completely overwrite a particular resource’s object
// DELETE — remove a particular resource’s object

/*
// Here, the handle /url on the back of the local host returns the JSON data
app.get("/url", (req, res, next) => {
 res.json(["Tony","Lisa","Michael","Ginger","Food"]),
 console.log("Received your call!");
});
*/


module.exports = app;