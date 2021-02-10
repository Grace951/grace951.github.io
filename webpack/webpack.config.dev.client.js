let webpack = require('webpack');
let path  = require( 'path');
const AssetsPlugin = require('assets-webpack-plugin');



let projectRoot = process.cwd();
let assetsPath = path.join(projectRoot,   "public", "build");
let publicPath = `/build/`;
let host = "0.0.0.0";

let config = {
    devServer: {
		inline: true,
		host,
		port: 3100,
		hot: true,
		disableHostCheck: true,
		contentBase: assetsPath,
		watchOptions: {
		  poll: true
		}
    },	
	cache: false,
	// devtool: 'cheap-module-eval-source-map',
	devtool: 'eval',
	mode: "development",
	context: process.cwd(),
	entry: {
		bundle: [
			path.resolve(projectRoot, './webpack/util/polyfills.js'),
			path.resolve(projectRoot, './src/client/index.js'),
		]
	},
	target: 'web',
	output: {
		path: assetsPath, // Note: Physical files are only output by the production build task `npm run build`.
		publicPath: publicPath,
		pathinfo: false,
		filename: 'bundle/[name].js',
		chunkFilename: 'bundle/chunk-[name].js',
		hotUpdateChunkFilename: '[hash].hot-update.js', // use for AssetsPlugin to filter out hot updates
	},
	plugins: [
		new webpack.DefinePlugin({
			'process.env.NODE_ENV': JSON.stringify('development'),
			'process.env.BROWSER': true,
		}),	
		new webpack.HotModuleReplacementPlugin(),
		new webpack.DllReferencePlugin({
			context: path.join(projectRoot, "src" , "client"),
			manifest: require("../dll/commons-manifest.json")
		}),
		new AssetsPlugin({
			fullPath: true,
			path: path.join(projectRoot, './dev')
		})	
	],
	module: {
		noParse: /ffmpeg/,
		rules: [
			{
				test: /\.s[ac]ss$/i,
				include: [
					path.resolve(projectRoot, './src/shared/'),
					path.resolve(projectRoot, './node_modules/bootstrap-sass/assets/stylesheets/'),
				],
				use: [
					"style-loader",
					"css-loader?url=false",
					"sass-loader",
				],
			},	
			{ test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/i, 
				loader: "url-loader" ,
				options: {
					limit: 10000,
					mimetype: 'application/font-woff',
					name: 'fonts/[name].[ext]'
				},
				include: [
					path.resolve(projectRoot, './src/shared/fonts/') ,
					path.resolve(projectRoot, './node_modules/bootstrap-sass/assets/fonts/') ,
					path.resolve(projectRoot, './node_modules/font-awesome/fonts/') ,
				 ],				
			},
			{ test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/i, 
				loader: "file-loader" ,
				options: {
					name: 'fonts/[name].[ext]'
				},				
				include: [
					path.resolve(projectRoot, './src/shared/fonts/') ,
					path.resolve(projectRoot, './node_modules/bootstrap-sass/assets/fonts/') ,
					path.resolve(projectRoot, './node_modules/font-awesome/fonts/') ,
				 ],
			},				
			{
				test: /(\.jsx)|(\.js)$/i,
				exclude: [/node_modules/, /ffmpeg/],
				include: [
					path.join(projectRoot, "src" , "client"),
					path.join(projectRoot, "src" , "shared")
				],				
				use: [								
					{
						loader: 'babel-loader', 
						options: {
							cacheDirectory: true,
							babelrc: false,
							presets: [
								"@babel/preset-react",
								[
									"@babel/preset-env",
									{
										"modules": false,
										"debug": true,
										"loose": true,
										"targets": {
											"browsers": [
												"last 2 Chrome versions",
												"last 2 ChromeAndroid versions",
												"last 2 Edge versions",
												"last 2 Firefox versions",
												"last 2 FirefoxAndroid versions",
												"last 2 iOS versions",
												"last 2 Opera versions",
												"last 2 Safari versions",
												"ie >= 11"
											]
										},
									}
								],
							],
							plugins: [
								"@babel/plugin-syntax-dynamic-import",
								"@babel/plugin-proposal-object-rest-spread",
								"@babel/plugin-proposal-class-properties",
							],
						},
					}
				],								
			},
		]
	},
	resolveLoader: {
		modules: [
			"node_modules"
		],
	},
	resolve: {
		modules: [
			"node_modules"
		],
		unsafeCache : true,
	},
	profile: true
}



module.exports = config;
