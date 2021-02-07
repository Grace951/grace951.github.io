let path = require("path");
let webpack = require("webpack");
let projectRoot = process.cwd();

let config = {
	devtool: process.env.NODE_ENV === 'production' ? null : 'inline-source-map',
	mode: "development",
    entry: {
        commons: [
			// path.resolve(projectRoot, './webpack/util/polyfills.js'),
			path.join(__dirname, "..","src", "client", "vendors.js")
		]
    },
    output: {
        path: path.join(__dirname, "..", "public"),
        filename: "dll.[name].js",
        library: "[name]"
    },
    plugins: [        
        new webpack.DllPlugin({
            path: path.join(__dirname, "..", "dll", "[name]-manifest.json"),
            name: "[name]",
            context: path.resolve(__dirname, "../src/client")
        }),
        // new webpack.DefinePlugin({
        //     'process.env.NODE_ENV': JSON.stringify("development"),
        // }),
    ],
    resolve: {
		modules: [
			path.resolve(__dirname, "../src/client"),
			"node_modules"
		]
    }
};

module.exports = config;
