//import 'babel-polyfill';
import path from 'path';
import express from 'express';
import compression from 'compression';
import webpack from 'webpack';
import open from 'open';
import cookieParser from 'cookie-parser';
import devMiddleware from 'webpack-dev-middleware';
import hotMiddleware from 'webpack-hot-middleware';
import config from '../../webpack/webpack.config.dev';

import requestHandler from './requestHandler';


import http from 'http';
import httpProxy from 'http-proxy';
import request from 'request';

const port = process.env.PORT || 3000;


const app = express();

let publicPath = path.resolve( process.cwd(), "./public");
let viewPath = path.resolve(process.cwd(), "./src/server/views");
const oneDay = 86400000;
app.use(cookieParser());
app.engine('ejs', require('ejs').renderFile);
app.set('view engine', 'ejs');


global.__CLIENT__ = false; // eslint-disable-line
process.env.BROWSER = false;
delete process.env.BROWSER;


const serverOptions = {
  // quiet: true,
  // noInfo: true,
	// hot: true,
	publicPath: config.output.publicPath,
	progress: true,
	stats: {
		hash: true,
		version: true,
		timings: true,
		assets: false,
		chunks: true,
		modules: true,
		reasons: false,
		children: false,
		source: false,
		errors: true,
		errorDetails: true,
		warnings: true,
		publicPath: true,
		colors: true
	},
};

let compiler = webpack(config);

//console.log(serverOptions);
app.use(devMiddleware(compiler, serverOptions));
app.use(hotMiddleware(compiler));



app.set('views', viewPath);
app.use( express.static(publicPath, { maxAge: oneDay * 7 }));
app.use(requestHandler);



app.listen(port, function(err) {
	if (err) {
		console.log(err);
	} else {
		console.info(`Server listening on port ${port}!`);
	}
});




