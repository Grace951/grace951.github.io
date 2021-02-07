import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import React from 'react'
import { hydrate } from 'react-dom'
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from 'react-redux'
import App from '../shared/App';
import configureAppStore from "../shared/store/configureStore";

// Grab the state from a global variable injected into the server-generated HTML
const preloadedState = window.__PRELOADED_STATE__

// Allow the passed state to be garbage-collected
delete window.__PRELOADED_STATE__

const store = configureAppStore(preloadedState);

hydrate(
	<Provider store={store}>
		<BrowserRouter>
			<App />
		</BrowserRouter>
	</Provider>,
  document.getElementById("rootWrap")
);
