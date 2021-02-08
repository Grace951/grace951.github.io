var webpack = require('webpack');
var path = require('path');
var CleanWebpackPlugin = require('clean-webpack-plugin');
let nodeExternals = require('webpack-node-externals');
const TerserPlugin = require('terser-webpack-plugin');
const AssetsPlugin = require('assets-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
var projectRoot = process.cwd();
let assetsPath = process.cwd() + "/public/build";
var publicPath = "/build/";
let distPath = path.resolve(projectRoot, './dist');

var config = [
	{
		name: "browser",
		mode: "production",
		cache: false,
		context: process.cwd(),
		entry: {
			bundle: [
				path.resolve(projectRoot, './src/client/index.js'),
				require.resolve('./util/polyfills')
			],
		},
		target: 'web',
		output: {
			path: assetsPath,
			publicPath: publicPath,
			filename: 'bundle/[name]-[chunkhash].js',
			chunkFilename: 'bundle/chunk-[name]-[chunkhash].js'
		},
		optimization: {
			splitChunks: {
				cacheGroups: {
					vendor: {
						test: /[\\/]node_modules[\\/](react|react-dom|redux|react-redux|styled-components|react-router|connected-react-router|react-intl|axios|es6-promise|history)[\\/]/,
						name: 'vendor',
						chunks: 'all'
					}
				}
			},
			minimize: true,
			minimizer: [
				new TerserPlugin()
			],
		},
		plugins: [
			new webpack.DefinePlugin({
				'process.env': {
					NODE_ENV: JSON.stringify("production"),
					BROWSER: true
				},
				__CLIENT__: true,
				__SERVER__: false,
				__DEVELOPMENT__: false,
				__DEVTOOLS__: false
			}),
			new CleanWebpackPlugin(['public/build'], {
				root: projectRoot,
				verbose: true,
				//exclude: ['shared.js']
			}),
			new AssetsPlugin({
				fullPath: true,
				path: path.join(projectRoot, './dist')
			}),
		],
		module: {
			rules: [
				{
					test: /(\.jsx)|(\.js)$/,
					exclude: /node_modules/,
					loader: 'babel-loader',
					include: [
						path.join(projectRoot, "src", "shared"),
						path.join(projectRoot, "src", "client") //important for performance!
					],
					options: {
						cacheDirectory: true,
					},
				},
				{
					test: /\.s[ac]ss$/i,
					include: [
						path.resolve(projectRoot, './src/shared/'),
						path.resolve(projectRoot, './node_modules/bootstrap-sass/assets/stylesheets/'),
					],
					use: [
						"style-loader",
						'css-loader?url=false',
						'sass-loader',				
					],
				},
				{
					test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/i,
					loader: "url-loader",
					options: {
						limit: 10000,
						mimetype: 'application/font-woff',
						name: 'fonts/[name].[ext]'
					},
					include: [
						path.resolve(projectRoot, './src/shared/fonts/'),
						path.resolve(projectRoot, './node_modules/bootstrap-sass/assets/fonts/'),
						path.resolve(projectRoot, './node_modules/font-awesome/fonts/'),
					],
				},
				{
					test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/i,
					loader: "file-loader",
					options: {
						name: 'fonts/[name].[ext]'
					},
					include: [
						path.resolve(projectRoot, './src/shared/fonts/'),
						path.resolve(projectRoot, './node_modules/bootstrap-sass/assets/fonts/'),
						path.resolve(projectRoot, './node_modules/font-awesome/fonts/'),
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
			unsafeCache: true,
		},
	},
	{
		// The configuration for the server-side rendering
		name: "server-side rendering",
		mode: "production",
		entry: "./src/server/server.prod.js",
		target: "node",
		context: process.cwd(),
		node: {
			__dirname: false,
			__filename: false,
			global: true
		},
		output: {
			path: distPath,
			filename: "server.generated.js",
			publicPath: publicPath,
			libraryTarget: "commonjs2"
		},
		optimization: {
			splitChunks: {
				cacheGroups: {
				  styles: {
					name: 'styles',
					type: 'css/mini-extract',
					chunks: 'all',
					enforce: true,
				  },
				},
			},
			minimizer: [
				new CssMinimizerPlugin(),
				new TerserPlugin()
			],
		},
		plugins: [
			new webpack.DefinePlugin({
				'process.env.NODE_ENV': JSON.stringify("production"),
				'process.env.BROWSER': false,
				__CLIENT__: false,
				__SERVER__: true,
				__DEVELOPMENT__: false,
				__DEVTOOLS__: false
			}),
			new MiniCssExtractPlugin({
				filename: "../public/build/main.css"
			})
		],
		externals: [
			{ "./webpack-assets.json": "./webpack-assets.json" },	
			nodeExternals()
		],
		module: {
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
					exclude: /node_modules/,
					include: [
						path.join(projectRoot, "src") //important for performance!
					],
					use: [
						{
							loader: 'babel-loader',
							options: {
								cacheDirectory: false,
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
					]					
				},
			]
		},
	}
];


module.exports = config;
