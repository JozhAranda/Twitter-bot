
// favorite.js

var Twitter = require('twitter');
var config 	= require('./config.js');

var T = new Twitter(config);

// Set up your search params
var params = {
	q: '#nodejs',
	count: 10,
	result_type: 'recent',
	lang: 'es'
}

T.get('search/tweets', params, function(err, data, response) {

	if(!err) {

		// Loop through the returned tweets
		for (var i = 0; i < data.statuses.length; i++) {
			
			// Get tweet Id from the returned data
			var id = { id: data.statuses[i].id_str }
			
			// Try to Favorite the selected Tweet
			T.post('favorites/create', id, function(err, response) {

				// If the favorites fails, log the error message
				if(err) {

					console.log(err[0].message);
				}
				// If the favorite is successful, log the url of the tweet
				else {

					var username 	= response.user.screen_name;
					var tweetId 	= response.id_str;

					console.log('Favorited: ', 'https://twitter.com/' + username + '/status/' + tweetId + '');
				}
			});
		}
	
	} else {

		console.log(err);
	}
})