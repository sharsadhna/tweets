var Twitter = require('twitter');
var express = require('express');
const app = express()
const port = 3000;

var client = new Twitter({
	consumer_key: 'QswKEmc477VR7tbWNI5jsOLVn',
	consumer_secret: 'KIudiVWpjs5KnnEr82cnLwDzEv9wYOoWC4s9pz5USbNlu3hPxy',
	access_token_key: '18403604-1D1bbS5b5RcuwukrkAb5cr1jWTM75wBV1h2DqhfSC',
	access_token_secret: 'WUeWQlfnjxDO8repsssNK37WeyhpXYoZw0syeOGxYrWMB'
});

app.get('/tweets', function(req, res){
	var username = req.query.username;
	var max_id =  req.query.max_id;
	var params = {screen_name: username, max_id: max_id}; 
	client.get('statuses/user_timeline', params, function(error, tweets, response) {
		if (!error) {
			res.json(tweets)
		} else {
			console.log(error);
		}
	});
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
