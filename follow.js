
// follow.js

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

		for (var i = 0; i < data.statuses.length; i++) {
			
			var screen_name = data.statuses[i].user.screen_name;

			T.post('friendships/create', { screen_name }, function(err, res) {

				if(err) {

					console.log(err);
				
				} else {

					console.log(screen_name, ': **FOLLOWED**');
				}
			});
		}
	
	} else {

		console.log(err);
	}
})