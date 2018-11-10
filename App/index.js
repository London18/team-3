// Run this by typing in: node index.js


// We are using Express
var express = require("express");
var app = express();

// When port 3000 is accessed, the log reports
app.listen(3000, () => {
 console.log("Server running on port 3000");
});


// From @jeffanderson Medium article:
// A route has 3 parts:
// HTTP method associated with the request we want to capture: app.get()
// URL of the request we want to capture: app.get('/');
// A handler function: app.get('/', function(req, res) { });
// Example empty route:
app.get('/', function(req, res) {
  // We must end the request when we are done handling it
  res.end();
});
// GET — retrieve a particular resource’s object or list all objects
// POST — create a new resource’s object
// PATCH — make a partial update to a particular resource’s object
// PUT — completely overwrite a particular resource’s object
// DELETE — remove a particular resource’s object

// Here, the handle /url on the back of the local host returns the JSON data
app.get("/url", (req, res, next) => {
 res.json(["Tony","Lisa","Michael","Ginger","Food"]),
 console.log("Received your call!");
});

module.exports = app;