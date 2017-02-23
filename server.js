/* eslint no-console: 0 */


var compression = require('compression');
var express = require('express');
var http = require('http');
var path = require('path');
var helmet = require('helmet');
var xssFilters = require('xss-filters');


const port = process.env.PORT || 3000;

const app = express();

let publicPath = path.resolve( process.cwd(), "./public");

const oneDay = 86400000;
app.use(helmet());
app.use(helmet.contentSecurityPolicy({
	directives: {
		defaultSrc: ["'none'"],
		scriptSrc: ["'self'", "'unsafe-inline'", "https://www.google-analytics.com/", "http://cse.google.com/", "https://cse.google.com/", "https://connect.facebook.net/"
												, "https://apis.google.com/", "http://ajax.googleapis.com"	],
		styleSrc: ["'self'", "'unsafe-inline'", "https://fonts.googleapis.com", "http://fonts.googleapis.com/"],
		imgSrc: ["'self'", "data:", "https://www.google-analytics.com/", "https://www.facebook.com/", "https://staticxx.facebook.com/"],
		fontSrc: ["'self'", "https://fonts.gstatic.com", "http://fonts.gstatic.com/", "data:"],
		frameSrc: ["'self'", "https://accounts.google.com/","https://staticxx.facebook.com/"],
		connectSrc: ["'self'"],
		reportUri: "/cspviolation"
	},
}));
app.use(helmet.referrerPolicy({ policy: 'no-referrer' }));
app.use(compression());
app.use( express.static(publicPath, { maxAge: oneDay * 7 }));


app.listen(port, function(err) {
	if (err) {
		console.log(err);
	} else {
		console.info(`Server listening on port ${port}!`);
	}
});


