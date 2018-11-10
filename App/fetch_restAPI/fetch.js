// CLIENT SIDE

// Front end HTML calls functions in fetch.js
// Fetch.js uses fetch to create http call
// HTTP call is made to rest API


// SERVER SIDE

// HTTP call is picked up by rest API, index.js
// NodeJS processes HTTP call
// Uses Mongoose to talk to the MongoDB

// npm i node-fetch --save

const fetch = require("node-fetch");

// Get appointments list
fetch('http://localhost:3000/appointments', {
	method: 'get'

	// These interpret the response from the rest API
}).then(function(response) {
	return response.json();
}).then(function(json) {
	console.log("Here are your appointments:");
	console.log(json);
}).catch(function(err) {
	// Error :()
});



// Update status
data = ["Michael","Ginger","Food"];
fetch('http://localhost:3000/status', {
	method: 'put',

	// This sends a request to the rest API containing JSON data

	headers: {"Content-Type": "application/json"},

	body: JSON.stringify(data)



}).then(function(response) {
	console.log("Status updated");
}).catch(function(err) {
	// Error :()
});




// Login

logindata = ["username","password000"];
fetch('http://localhost:3000/login', {
	method: 'get',

}).then(function(response) {
	return response.text();
}).then(function(text) {
	var match = "No";
	if (logindata[1] == text){
		match = "Yes";
	}
	console.log("Did the login details match?");
	console.log(match);
}).catch(function(err) {
	// Error :()
});




// Create nurse/family/appointment
fetch('http://localhost:3000/create', {
	method: 'post'

}).then(function(response) {
	return response.text();
}).then(function(text) {
	console.log("Object created");
	console.log(text);
}).catch(function(err) {
	// Error :()
});


