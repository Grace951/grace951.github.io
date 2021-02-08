let webpack = require('webpack');
let path  = require( 'path');
let nodeExternals = require('webpack-node-externals');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

let projectRoot = process.cwd();
let publicPath = `/`;
let distPath = path.join(projectRoot,   "dev");

let config = 
{
	// The configuration for the server-side rendering
	stats: 'minimal',
	name: "server-side rendering",
	entry: "./src/server/server.prod.js",
	mode: "development",
	target: "node",
	context: process.cwd(),
	node: {
		__dirname: false,
		__filename: false,
		global: false,
	},
	output: {
		path: distPath,
		filename: "server.generated.dev.js",
		publicPath: publicPath,
		libraryTarget: "commonjs2",
	},
	plugins: [
		new webpack.DefinePlugin({
		'process.env.BROWSER': false,
		}),	
		new MiniCssExtractPlugin({
			filename: "../public/dev/main.css"
		})
	],
    externals: [
		nodeExternals(),
		{ "./webpack-assets.json": "./webpack-assets.json" },
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
					{
						loader: MiniCssExtractPlugin.loader
					},
					'css-loader?url=false',
					'sass-loader',				
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
				test: /(\.jsx)|(\.js)$/,
				exclude: [/node_modules/],
				include: [
					path.join(projectRoot, "src" ) //important for performance!
				],
				use: [
					{
						loader: 'babel-loader',
						options : {
							cacheDirectory: true,
							babelrc: false,
							presets: [
								"@babel/preset-react",
								[
									"@babel/preset-env",
									{
										"targets": {
											"node": "10"
										}
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
			}
		]
	},
};



module.exports = config;
