//import 'babel-polyfill';
let path = require('path');
let express = require('express');
let webpack = require('webpack');
let cookieParser = require('cookie-parser');
let devMiddleware = require('webpack-dev-middleware');
let config = require('../../webpack/webpack.config.dev.client');


const port = 3100;

const app = express();

global.__CLIENT__ = false; // eslint-disable-line
delete process.env.BROWSER;


const serverOptions = {
	publicPath: config.output.publicPath,
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

app.use(devMiddleware(compiler, serverOptions));


app.listen(port, '0.0.0.0', function(err) {
	if (err) {
		console.log(err);
	} else {
		console.info(`Server listening on port ${port}!`);
	}
});




