let AWS = require('aws-sdk');
let _auth = require('./Authorizer');
let google = require('googleapis').google;
const pubsub = google.pubsub('v1');
exports.handler = function (event, context, callback) {
	pubsub.projects.subscriptions.acknowledge({
		subscription: `projects/${process.env.GCLOUD_PROJECT_ID}/subscriptions/firstNlastN`,
		resource: {
			ackIds: ["QV5AEkw2BkRJUytDCypYEU4EISE-MD5FU0RQBhYsXUZIUTcZCGhRDk9eIz81IChFEwtTE1FcdhhCEGgzXHUHUQ0YdH4yI2MPQlULRVl9VVsJPGh-Y3QGUAkfcn1lfW9dGgYHQnuQn-ils8t1Zhg9XBJLLD5-PTNF", "QV5AEkw2BkRJUytDCypYEU4EISE-MD5FU0RQBhYsXUZIUTcZCGhRDk9eIz81IChFEwtTE1FcdhhCEGgzXHUHUQ0YdH4yI2MPQlULRVl_VVsJPGh-Y3QGUQUZd3phdmpeEgELTHuQn-ils8t1Zhg9XBJLLD5-PTNF"]
		}
	})
		.then(response => {
			console.log(response.data);           // successful response
			/*
			response.data = {}
			*/
		})
		.catch(err => {
			console.log(err, err.stack); // an error occurred
		});


	callback(null, 'Successfully executed');
}





































