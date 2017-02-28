if (process.env.BROWSER) {
	require ('./global.sass');
}
import React from 'react';
import { Link } from 'react-router';
import { ShareButtons, generateShareIcon} from 'react-share';
import { Header } from '../components/Header';
import  Footer from "./Footer";


const {
  FacebookShareButton,
  GooglePlusShareButton,
  LinkedinShareButton,
  TwitterShareButton,
  PinterestShareButton,
  VKShareButton
} = ShareButtons;

const FacebookIcon = generateShareIcon('facebook');
const TwitterIcon = generateShareIcon('twitter');
const GooglePlusIcon = generateShareIcon('google');
const LinkedinIcon = generateShareIcon('linkedin');
const PinterestIcon = generateShareIcon('pinterest');

const NotFoundPage = (props) 	=> (
		<div className="row">
			<div className="col-xs-12">
				<h1 className="center-page"> Page Not Found!! </h1>
			</div>
		</div>
	);

const UnauthorizedPage = (props) 	=> (
		<div className="row">
			<div className="col-xs-12">
				<h1 className="center-page"> Unauthorized </h1>
			</div>
		</div>
	);



let Root = class Root extends React.Component{
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
					families: [ 'Merriweather::latin' , 'Rajdhani:400,500,600:latin' , 'Open+Sans::latin', 'Ubuntu:300italic:latin']
				}
			});
		});	
	}
	render() {
		return (
	<div>
		<Header/>
		<article id="main">		
			{this.props.children}
		</article>
		<Footer/>
	</div>
		);
	}
};

Root.propTypes = {
    children: React.PropTypes.oneOfType([
      React.PropTypes.arrayOf(React.PropTypes.node),
      React.PropTypes.node
    ])	
};

export { Root, NotFoundPage, UnauthorizedPage};
