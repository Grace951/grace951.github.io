require("react");
require("babel-polyfill");
require("react-addons-css-transition-group");
require("react-dom");
require("react-redux");
require("react-router");
require("react-router-redux");
require("redux");
require("redux-thunk");
require("immutability-helper");
require("axios");
if (process.env.NODE_ENV !== "production"){
	require("webpack-hot-middleware");
	// require("webpack-dev-middleware");
}
