import path from 'path'
import qs from 'qs'
import express from 'express'
import React from "react";
import expressStaticGzip from './compression';
import { Provider } from 'react-redux'
import { StaticRouter } from "react-router-dom";
import configureAppStore from "../shared/store/configureStore";

import App from "../shared/App.js";
import { renderToString, renderToNodeStream } from 'react-dom/server'

let publicPath = path.resolve(process.cwd(), "./public");
let port = 3000;
let asset = require("./webpack-assets.json");
asset.css= "/build/main.css";
if (process.env.NODE_ENV != 'production') {
	asset.vendor = {};
	asset.vendor.js = '/dll.commons.js';
	asset.css= "/dev/main.css";
}
const oneDay = 86400000;
const app = express()

// app.use(compression());
app.get('/build/bundle/*', expressStaticGzip(path.resolve(process.cwd(), "./public"), {
	urlContains: 'build/bundle/',
	fallthrough: false,
	enableBrotli: true,
	maxAge: oneDay * 8
}));
app.get('/assets/*', expressStaticGzip(path.resolve(process.cwd(), "./public"), {
	urlContains: 'assets/',
	fallthrough: false,
	enableBrotli: true,
	maxAge: oneDay * 8
}));
app.use(express.static(publicPath, {
	maxAge: oneDay * 7
}));


app.use(handleRender)
app.listen(port)

function getAssetInfo() {
	return { asset };
}

function handleRender(req, res) {
	// Read the counter from the request, if provided
	const params = qs.parse(req.query)
	const context = {};

	// Compile an initial state
	let preloadedState = {}

	// Create a new Redux store instance
	const store = configureAppStore(preloadedState);

	// Render the component to a string
	const html = renderToString(
		<Provider store={store}>
			<StaticRouter location={req.url} context={context}>
				<App />
			</StaticRouter>
		</Provider>
	)

	// Grab the initial state from our Redux store
	const finalState = store.getState()

	// Send the rendered page back to the client
	res.send(renderFullPage(html, finalState))
}
function renderFullPage(html, preloadedState) {
	let info = getAssetInfo();
	return `
	  <!doctype html>
	  <html>
		<head>
		  <title>Hopeshelter Design</title>
		  <link rel="stylesheet" type="text/css" href='${info.asset.css}'>		  
		</head>
		<body>
		  <div id="rootWrap">${html}</div>
		  <script>
			// WARNING: See the following for security issues around embedding JSON in HTML:
			// https://redux.js.org/recipes/server-rendering/#security-considerations
			window.__PRELOADED_STATE__ = ${JSON.stringify(preloadedState).replace(
				/</g,
				'\\u003c'
			)}
		  </script>
		  <script defer src="https://cdn.polyfill.io/v2/polyfill.min.js" crossorigin="anonymous"></script>
		  <script defer src='${info.asset.vendor.js}' ></script>
		  <script defer src='${info.asset.bundle.js}' ></script>
		</body>
	  </html>
	  `
}
