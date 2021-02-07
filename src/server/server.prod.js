import path from 'path'
import qs from 'qs'
import express from 'express'
import React from "react";
import expressStaticGzip from './compression';
import { Provider } from 'react-redux'
import { StaticRouter } from "react-router-dom";
import configureAppStore from "../shared/store/configureStore";
import { matchPath } from "react-router";
import {routes} from '../shared/route/index';

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
	let preloadedState = {}
	var query = req.query;
	const store = configureAppStore(preloadedState);
	let match = {};
	let components = [];
	const location = req.url;
	routes.some(route => {
		match = matchPath(location, route);
		if (match){
			components.push(route.component);
			route.routes && route.routes.some(r => {
				match = matchPath(location, r);
				if (match){
					// console.log(r.path);
					components.push(r.component);
				}
				return match;
			});
		}
		return match;
	});
	if(!components || !components.length){
		res.send(renderFullPage(location, store));
		return;
	}
	let {params} = match;
	let actionCreators = components.reduce((acc, cur)=>{
		if(cur.serverFetch && Array.isArray(cur.serverFetch)){
			acc = acc.concat(cur.serverFetch);
		}
		return acc;
	}, []);

	let fPara = {dispatch:store.dispatch, actionCreators, params, query};
	fetchData(fPara).then(()=>{
		res.send(renderFullPage(location, store));
	}).catch((err)=>{
		console.log(err)
	});
}

function fetchData({ actionCreators, dispatch, params = {}, query = {},  }) {          
	let promiseArray = actionCreators.map(actionCreator => {                 
			return actionCreator?(dispatch(actionCreator({ params, query}))):null;
		});
	return Promise.all( promiseArray );
}
function renderFullPage(location, store) {
	const context = {};
	// Grab the initial state from our Redux store
	const finalState = store.getState()

	const html = renderToString(
		<Provider store={store}>
			<StaticRouter location={location} context={context}>
				<App />
			</StaticRouter>
		</Provider>
	)


	// Send the rendered page back to the client
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
			window.__PRELOADED_STATE__ = ${JSON.stringify(finalState).replace(
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
