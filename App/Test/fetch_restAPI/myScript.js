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