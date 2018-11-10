// CLIENT SIDE

// Front end HTML calls functions in fetch.js
// Fetch.js uses fetch and post to create http call
// HTTP call is made


// SERVER SIDE

// HTTP call is picked up by index.js
// NodeJS processes HTTP call
// Uses Mongoose to talk to the MongoDB

// npm i node-fetch --save
const fetch = require("node-fetch");

/*
David Walsh fetch documentation

A Request instance represents the request piece of a fetch call. By passing fetch a Request you can make advanced and customized requests:

method - GET, POST, PUT, DELETE, HEAD
url - URL of the request
headers - associated Headers object
referrer - referrer of the request
mode - cors, no-cors, same-origin
credentials - should cookies go with the request? omit, same-origin
redirect - follow, error, manual
integrity - subresource integrity value
cache - cache mode (default, reload, no-cache)
*/




// Get appointments list
fetch('http://localhost:3000/appointments', {
	method: 'get'
}).then(function(response) {
	return response.text();
}).then(function(text) {
	console.log("Here are your appointments:");
	console.log(text);
}).catch(function(err) {
	// Error :()
});

// Update status
fetch('http://localhost:3000/status', {
	method: 'put'
}).then(function(response) {
	return response.text();
}).then(function(text) {
	console.log("Here are your appointments:");
	console.log(text);
}).catch(function(err) {
	// Error :()
});


// Login
fetch('http://localhost:3000/login', {
	method: 'get'
}).then(function(response) {
	return response.text();
}).then(function(text) {
	console.log("Here are your appointments:");
	console.log(text);
}).catch(function(err) {
	// Error :()
});


// Create nurse/family/appointment
fetch('http://localhost:3000/create', {
	method: 'post'
}).then(function(response) {
	return response.text();
}).then(function(text) {
	console.log("Here are your appointments:");
	console.log(text);
}).catch(function(err) {
	// Error :()
});

