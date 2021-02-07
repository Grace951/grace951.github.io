import './f2e.sass';
import React from 'react';
import SiteShlef from './SiteShlef';

let SiteShlef_Data = [
	{
		techs:"React / Redux / RWD / Bootstrap / Autoprefixer / axios / webpack /	SASS / HTML5 / CSS3 / SSR ( Server Side Rendering) / User Login / auth with RESTful API",
		web_link: {
			src: "https://react-redux-demo-chingching.herokuapp.com/", img: "/images/web/au/logo.png",
			title: <h1><span className="em-bold">Hi-Tech</span> <span className="em-thin">Digital CCTV</span></h1>
		},
		web_logo:[
			{
				link: "https://facebook.github.io/react/",
				img:  "/images/skills/reactjs.svg"
			},
			{
				link: "https://github.com/reactjs/redux",
				img:  "/images/skills/redux.png"
			},{
				link: "https://webpack.js.org/",
				img:  "/images/skills/webpack.svg"
			},{
				link: "https://nodejs.org/en/",
				img:  "/images/skills/node.png"
			},{
				link: "https://www.mongodb.com/",
				img:  "/images/skills/mongodb.png"
			},{
				link: "https://www.npmjs.com/",
				img:  "/images/skills/npm.png"
			},{
				link: "http://sass-lang.com/",
				img:  "/images/web/au/logo-sass.svg",
				style: {width:"auto", height:"50px"}
			},{
				link: "",
				img:  "/images/web/au/html5css3badges.png"
			},{
				link: "/images/web/au/html5css3badges.png",
				img:  "/images/skills/es6.png"
			},{
				link: "http://getbootstrap.com/",
				img:  "/images/web/au/Boostrap_logo.png"
			}
		],
		web_snap: [
			{img: "/images/web/auv2/au_list1.png"},
			{img: "/images/web/auv2/au_list2.png"},
			{img: "/images/web/auv2/au_list3.png"},
			{img: "/images/web/auv2/au_list4.png"},
			{img: "/images/web/auv2/au_list5.png"},
		]
	},
	{
		techs:"Angular JS / RWD / Bootstrap / Compass / SASS / HTML5 / CSS3 / jQuery / AJAX",
		web_link: {
			src: "http://www.hitechdigitalcctv.com.au/#/home", img: "/images/web/au/logo.png",
			title: <h1><span className="em-bold">Hi-Tech</span> <span className="em-thin">Digital CCTV</span></h1>
		},
		web_logo:[
			{
				link: "http://angularjs.org/",
				img:  "/images/web/au/AngularJS-large.png"
			},{
				link: "http://getbootstrap.com/",
				img:  "/images/web/au/Boostrap_logo.png"
			},{
				link: "http://compass-style.org/",
				img:  "/images/web/au/compass.png"
			},{
				link: "http://sass-lang.com/",
				img:  "/images/web/au/logo-sass.svg",
				style: {width:"auto", height:"50px"}
			},{
				link: "",
				img:  "/images/web/au/html5css3badges.png"
			},{
				link: "https://jquery.com/",
				img:  "/images/web/au/jquerylogo.png"
			}
		],
		web_snap: [
			{img: "/images/web/au/au_list.png"},
			{img: "/images/web/au/au_list2.png"}
		]
	},
	{
		techs:"Compass / RWD / SASS / HTML5 / CSS3 / jQuery",
		web_link: {
			src: "http://paints.byethost4.com", img: "/images/web/paints/logo-c.png",
			title: <h1>經典名畫</h1>
		},
		web_logo:[
			{
				link: "http://compass-style.org/",
				img:  "/images/web/au/compass.png"
			},{
				link: "http://sass-lang.com/",
				img:  "/images/web/au/logo-sass.svg",
				style: {width:"auto", height:"50px"}
			},{
				link: "",
				img:  "/images/web/au/html5css3badges.png"
			},{
				link: "https://jquery.com/",
				img:  "/images/web/au/jquerylogo.png"
			}
		],
		web_snap: [
			{img: "/images/web/paints/paints_homepage.png"},
			{img: "/images/web/paints/paints_homepage1.png"},
			{img: "/images/web/paints/paints_homepage2.png"},
		]
	},
]
const F2EPage = (props) => (
    <section id="webdesign">
       <div className="container">
            <div className="row">
				<SiteShlef {...(SiteShlef_Data[0])}>
					<p>這是為阿姨製作的 <b className="em-strong" >新版</b> 官網 - Hi-Tech Digital CCTV，位於澳洲，是一家專門銷售監控系統的商店。A real world website project  integrate with react, redux, server side rendering, redux form, auth with RESTful API server, user login(both local and social Logins) and with aditional web UI to ADD/DELETE/EDIT backend data。
					<b className="em-strong">首頁除banner外，等待阿姨提供首頁內容。另因Heroku 限制網站容量大小，Demo網頁產品的Documents未全放上去而僅連結至單一檔案)</b></p>
				</SiteShlef>
            </div>
            <div className="row">
				<SiteShlef {...(SiteShlef_Data[1])}>
					<p>此網站為我兩年前用Angular JS(Angular1)，幫阿姨建置的RWD官網 - Hi-Tech Digital CCTV，位於澳洲，是一家專門銷售監控系統的商店。此網站為 響應式網頁設計 (Responsive Web Design)，在行動裝置與平板上亦有良好的視覺呈現。<b className="em-strong">首頁除banner外，等待阿姨提供首頁內容</b>。全站由個人負責製作，包含所有美術、切圖、前端JS...。</p>
				</SiteShlef>
            </div>			
            <div className="row">
				<SiteShlef {...(SiteShlef_Data[2])}>
					<p>此網站為兩年前我用jQuery與CSS練習動畫的作品，收集了我認為經典的名畫，並詳細介紹畫派與畫家的風格與特色。文字資料與名畫圖片皆由網路蒐集而得。此網站為 響應式網頁設計 (Responsive Web Design)，在行動裝置與平板上亦有良好的視覺呈現。全站由個人負責製作，包含所有美術、切圖、前端JS...。</p>
				</SiteShlef>
            </div>			
		</div>
    </section>
);

F2EPage.propTypes = {

};

export default F2EPage;
