// Run this by typing in: node index.js


// We are using Express
var express = require("express");
var app = express();

// When port 3000 is accessed, the log reports
app.listen(3000, () => {
 console.log("Server running on port 3000");
});

app.get('/appointments', function(req,res){
	// Get list of appointments
	 console.log("Getting list of appointments");
	 res.send("Boo!");
	 //res.json(["Tony","Lisa","Michael","Ginger","Food"]);
	 res.end();
});

app.put('/status', function(req,res){
	// Update status
	console.log("Updating status");
	res.end();
});


app.get('/login', function(req,res){
	// Login
	console.log("Checking login");
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