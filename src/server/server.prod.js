/* eslint no-console: 0 */


import compression from 'compression';
import express from 'express';
import http from 'http';
import httpProxy from 'http-proxy';
import path from 'path';
import cookieParser from 'cookie-parser';
import request from 'request';
import helmet from 'helmet';
import xssFilters from 'xss-filters';

import requestHandler from './requestHandler';

const port = process.env.PORT || 3000;

global.__CLIENT__ = false; // eslint-disable-line
delete process.env.BROWSER;

const app = express();

let publicPath = path.resolve( process.cwd(), "./public");
let viewPath = path.resolve(process.cwd(), "./src/server/views");
const oneDay = 86400000;
app.use(helmet());
app.use(helmet.noCache());
app.use(helmet.contentSecurityPolicy({
	directives: {
		defaultSrc: ["'none'"],
		scriptSrc: ["'self'", "'unsafe-inline'", "https://www.google-analytics.com/", "http://cse.google.com/", "https://cse.google.com/", "https://connect.facebook.net/"
												, "https://apis.google.com/"	],
		styleSrc: ["'self'", "'unsafe-inline'", "https://fonts.googleapis.com"],
		imgSrc: ["'self'", "data:", "https://www.google-analytics.com/", "https://www.facebook.com/", "https://staticxx.facebook.com/"],
		fontSrc: ["'self'", "https://fonts.gstatic.com", "data:", ],
		frameSrc: ["'self'","https://accounts.google.com/","https://staticxx.facebook.com/"],
		connectSrc: ["'self'", ],
		reportUri: "/cspviolation"
	},
}));
app.use(helmet.referrerPolicy({ policy: 'no-referrer' }));
app.use(compression());
app.use(cookieParser());
app.engine('ejs', require('ejs').renderFile);
app.set('view engine', 'ejs');

app.set('views', viewPath);
app.use( express.static(publicPath, { maxAge: oneDay * 7 }));
app.use(requestHandler);


//console.log(path.join(__dirname, '../../dist/public'));
app.listen(port, function(err) {
	if (err) {
		console.log(err);
	} else {
		console.info(`Server listening on port ${port}!`);
	}
});


