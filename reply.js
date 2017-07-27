
// reply.js

var Twitter = require('twitter');
var config 	= require('./config.js');

var T = new Twitter(config);

// Set up a user stream
var stream = T.stream('user');

// When someone follows
stream.on('follow', followed);

// Trigger the callback
function followed(event) {

	console.log('Follow Event is running');

	var name 		= event.source.name,
		screenName	= event.source.screen_name;

	// Function that replies back to the user who followed
	tweetNow('@' + screenName + ', gracias por comenzar a seguirme.');
}

// Function definition to tweet back to user who followed
function tweetNow(tweetBody) {

	var tweet = {
		status: tweetBody
	}

	T.post('statuses/update', tweet, function(err, data, response) {

		if(err) {

			console.log(err);
		
		} else {

			console.log('Successfully');
		}
	});
}