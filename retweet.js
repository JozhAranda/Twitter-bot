
// retweet.js

var Twitter = require('twitter');
var config 	= require('./config.js');

var T = new Twitter(config);

// Set up your search params
var params = {
	q: '#firebase',
	count: 10,
	result_type: 'recent',
	lang: 'es'
}

T.get('search/tweets', params, function(err, data, response) {

	if(!err) {

		// Loop through the returned tweets
		for (var i = 0; i < data.statuses.length; i++) {

			var id = { id: data.statuses[i].id_str }

			T.post('statuses/retweet', id, function(err, response) {

				if(err) {

					console.log(err);
				
				} else {

					console.log("Retweeted!!!");
				}
			});
		}
	
	} else {

		console.log(err);
	}
})