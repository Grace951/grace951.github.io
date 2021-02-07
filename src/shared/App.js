import './app.sass';
import { withRouter } from 'react-router-dom';
import React from 'react';
import { Provider, connect } from 'react-redux';
import {routes, RouteWithSubRoutes} from './route/index';
import { getDevice } from './actions/deviceAction';

import {
	BrowserRouter as Router,
	Switch
} from "react-router-dom";
import {hideXsNavAction} from './actions/modalAction';
import Header from './components/Header';
import Footer from "./components/Footer";

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state={
			showSmNav: false
		};
		this.getGoogleAuth2 = this.getGoogleAuth2.bind(this);
		this.loadScript = this.loadScript.bind(this);
	}
	getGoogleAuth2(){
		return this.googleAuth2;
	}
	loadScript(src) {
		return new Promise(function (resolve, reject) {
			let s;
			s = document.createElement('script');
			s.src = src;
			s.onload = resolve;
			s.onerror = reject;
			document.head.appendChild(s);
		});
	}
	componentDidMount() {
		//GA
		// (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
		// (i[r].q=i[r].q||[]).push(arguments);},i[r].l=1*new Date();a=s.createElement(o),
		// m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m);
		// })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');
		// ga('create', 'UA-50969260-4', 'auto');
		// ga('send', 'pageview');
		// for google page speed insight, https://www.keycdn.com/blog/google-pagespeed-insights-wordpress/
		this.loadScript("https://cdn.jsdelivr.net/ga-lite/latest/ga-lite.min.js")
		.then(()=>{
			let galite = galite || {}; galite.UA = 'UA-50969260-4';
		});

		//Google Web fonts
		this.loadScript("https://ajax.googleapis.com/ajax/libs/webfont/1.6.26/webfont.js")
		.then(()=>{
			WebFont.load({
				google: {
					families: [ 'Merriweather::latin' , 'Noto Sans TC:100,300,600,700,900&display=swap', 'Rajdhani:400,500,600:latin' , 'Open+Sans::latin', 'Ubuntu:300italic:latin']
				}
			});
		});	
	}
	render() {
		return (
			<div id="main">
				<Header location={this.props.location}/>
				<div className="mainContent">
					<Switch>
						{routes.map((route, i) => (
							<RouteWithSubRoutes key={route.path} {...route} />
						))}
					</Switch>
				</div>
				<Footer/>
			</div>
		);
	}
}

App = connect(null)(App);
App = withRouter(App);
export default App;
