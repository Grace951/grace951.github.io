if (process.env.BROWSER) {
	require ('./home.sass');
}
import React from 'react';
import { connect } from 'react-redux';

import { getDevice } from '../actions/deviceAction';
import connectDataFetchers from '../lib/connectDataFetchers.jsx';
import {PinterestGrid} from './PinterestGrid/PinterestGrid';
let items = [
	{
		images: ["/images/portfolio/small/poster1.jpg"],
		img_height: 516,
		fullsrc: "/images/portfolio/full/poster1.jpg",
		category: "poster",
		note: "廣告練習 - 飛利浦奶瓶。以小朋友在奶瓶中游泳為意象，象徵小朋友使用avent奶瓶就像在...",
		hlink: "portfolio/avent.html",
		index: "0",
	},
	{
		images: ["/images/portfolio/small/poster2.jpg", "/images/portfolio/small/poster6.jpg"],
		img_height: 900,
		fullsrc: "/images/portfolio/full/poster2.jpg",
		category: "poster",
		note: "廣告練習 - iPhone6 廣告。背景特別設計用以強調 iphone 6 螢慕的鮮豔色彩。以弧型光芒...",
		hlink: "portfolio/iphone-dark.html",
		index: "1",
	},
	{
		images: ["/images/portfolio/small/poster3.jpg"],
		img_height: 527,
		fullsrc: "/images/portfolio/full/poster3.jpg",
		category: "poster",
		note: "廣告練習 - Vera Wang 婚紗廣告。Vera Wang 的禮服以難預約聞名 ，因此想要向消費者傳達...",
		hlink: "portfolio/vw-wang.html",
		index: "2",
	},
	{
		images: ["/images/portfolio/small/photo1.jpg"],
		img_height: 336,
		fullsrc: "/images/portfolio/full/photo1.jpg",
		category: "Misc",
		note: "PS修補練習 - 人臉瘦身化妝。此作品使用了'How to cheat in photoshop CS6'一書中的原始圖片...",
		hlink: "portfolio/makeup.html",
		index: "3",
	},
	{
		images: ["/images/portfolio/small/poster7.jpg"],
		img_height: 503,
		fullsrc: "/images/portfolio/full/poster7.jpg",
		category: "poster",
		note: "營會招募活動海報。這是為貓頭鷹親子教育協會所繪製的活動DM海報...",
		hlink: "portfolio/five.html",
		index: "8",
	},

	{
		images: ["/images/portfolio/small/poster4.jpg"],
		img_height: 336,
		fullsrc: "/images/portfolio/full/poster4.jpg",
		category: "poster",
		note: "廣告練習 - Nike 球鞋廣告。使用 Illustrator 製造出如針織排汗衫的背景，配合明亮水藍色...",
		hlink: "portfolio/nike.html",
		index: "10",
	},
	{
		images: ["/images/portfolio/small/poster5.jpg"],
		img_height: 503,
		fullsrc: "/images/portfolio/full/poster5.jpg",
		category: "poster",
		note: "廣告練習 - 克蘭詩化妝品廣告。以葉子包覆保養品，象徵克蘭詩的草本保養概念...",
		hlink: "portfolio/clarins.html",
		index: "6",
	},
	{
		images: ["/images/portfolio/small/poster8.jpg"],
		img_height: 503,
		fullsrc: "/images/portfolio/full/poster8.jpg",
		category: "poster",
		note: "廣告練習 - 美好人生淡香水廣告。背景特別設計以襯托香水瓶的晶透高雅質感...",
		hlink: "portfolio/happylife.html",
		index: "25",
	},
	{
		images: [
					"/images/portfolio/small/magazine0.jpg"
					,"/images/portfolio/small/magazine1.jpg"
					,"/images/portfolio/small/magazine2.jpg"
					,"/images/portfolio/small/magazine3.jpg"
					,"/images/portfolio/small/magazine4.jpg"
					,"/images/portfolio/small/magazine5.jpg"
					,"/images/portfolio/small/magazine6.jpg"
					,"/images/portfolio/small/magazine7.jpg"
					,"/images/portfolio/small/magazine8.jpg"
					,"/images/portfolio/small/magazine9.jpg"
					,"/images/portfolio/small/magazine10.jpg"
					,"/images/portfolio/small/magazine11.jpg"
				],
		img_height: 2628,
		fullsrc: "/images/portfolio/full/branding2.jpg",
		category: "branding",
		note: "排版練習 -雜誌排版。以高對比大標題吸引讀者的目光，並以留白使版面...",
		hlink: "http://issuu.com/grace_yeh/docs/______?e=11793034/12474947",
		index: "-1" /*none*/,
	},
	{
		images: [
					"/images/portfolio/small/branding2.jpg"
					,"/images/portfolio/small/branding3.jpg"
					,"/images/portfolio/small/branding4.jpg"
				],
		img_height: 728,
		fullsrc: "/images/portfolio/full/branding2.jpg",
		category: "branding",
		note: "LOGO練習 - Direction Book Store。Logo設計理念為:'書本給人方向'。 因此以由書本形狀組成方向指標牌...",
		hlink: "portfolio/branding2.html",
		index: "12",
	},
	{
		images: ["/images/portfolio/small/DM1.jpg"],
		img_height: 330,
		fullsrc: "/images/portfolio/full/DM1.jpg",
		category: "DM",
		note: "DM設計練習-朱宗慶打擊樂團冬季巡演。以木琴同色系為主調，擊琴的圖片用十六分隔法...",
		hlink: "portfolio/witness.html",
		index: "18",
	},
	{
		images: ["/images/portfolio/small/DM2.jpg"],
		img_height: 307,
		fullsrc: "/images/portfolio/full/DM2.jpg",
		category: "DM",
		note: "DM設計練習-仲向。建築展覽DM練習，以'仲向'標準字的造型與色彩為發想...",
		hlink: "portfolio/dm2.html",
		index: "21",
	},
	{
		images: ["/images/portfolio/small/branding5.jpg"],
		img_height: 318,
		fullsrc: "/images/portfolio/full/branding5.jpg",
		category: "branding",
		note: "VI 練習 - Direction Publishing。以由書本形狀組成方向指標牌，象徵閱讀給我們人生的方向...",
		hlink: "portfolio/directions.html",
		index: "26",
	},
	{
		images: ["/images/portfolio/small/DM3.jpg", "/images/portfolio/small/DM4.jpg"],
		img_height: 506,
		fullsrc: "/images/portfolio/full/DM3.jpg",
		category: "DM",
		note: "三摺兩面DM設計練習- AVEDA。封面以草綠色嫩葉呈現 Aveda 的環保自然形象， 對比色的橘色標題字...",
		hlink: "portfolio/aveda1.html",
		index: "20",
	},
	{
		images: ["/images/portfolio/small/photo2.jpg", "/images/portfolio/small/photo3.jpg"],
		img_height: 498,
		fullsrc: "/images/portfolio/full/photo2.jpg",
		category: "Misc",
		note: "PS特效練習 - 水彩油畫效果。將自己在碧潭照的相片用 photoshop 改成水彩油畫效果...",
		hlink: "portfolio/watercolor.html",
		index: "4",
	},
	{
		images: [
					"/images/portfolio/small/web1.jpg"
					,"/images/portfolio/small/web2.jpg"
					,"/images/portfolio/small/web3.jpg"
					,"/images/portfolio/small/web4.jpg"
					,"/images/portfolio/small/web5.jpg"
				],
		img_height: 634,
		fullsrc: "/images/portfolio/full/web1.jpg",
		category: "Web banner",
		note: "為貓頭鷹親子教育協會製作的banner...",
		hlink: "portfolio/baby.html",
		index: "41",
	},
	{
		images: ["/images/portfolio/small/branding12.jpg", "/images/portfolio/small/branding13.jpg"],
		img_height: 922,
		fullsrc: "/images/portfolio/full/branding12.jpg",
		category: "branding",
		note: "T-Shirt設計 閱向未來。象徵站 在人生十字路口的小朋友，藉由貓頭鷹親子教育協會獲得人生 未來的方向...",
		hlink: "portfolio/future1.html",
		index: "28",
	},
	{
		images: ["/images/portfolio/small/branding14.jpg"],
		img_height: 527,
		fullsrc: "/images/portfolio/full/branding14.jpg",
		category: "branding",
		note: "T-Shirt設計 Let's Read。這是為貓頭鷹親子教育協會所設計的T-shirt，用卡通風呼籲大家一起來閱讀...",
		hlink: "portfolio/letsread.html",
		index: "30",
	},
	{
		images: ["/images/portfolio/small/illustration11.png"],
		img_height: 520,
		fullsrc: "/images/portfolio/full/illustration11.png",
		category: "illustration",
		note: "插畫練習 - 愛哭鬼，躺臥在祢懷裡，今天讓我當個愛哭鬼，盡情的哭...",
		hlink: "portfolio/ghost.html",
		index: "43",
	},
	{
		images: ["/images/portfolio/small/illustration12.png"],
		img_height: 520,
		fullsrc: "/images/portfolio/full/illustration12.png",
		category: "illustration",
		note: "插畫練習 - 頑皮鬼，偶爾也讓心中的頑皮鬼出來搗蛋一下...",
		hlink: "portfolio/ghost.html",
		index: "44",
	},
	{
		images: ["/images/portfolio/small/illustration13.png"],
		img_height: 520,
		fullsrc: "/images/portfolio/full/illustration13.png",
		category: "illustration",
		note: "插畫練習 - 熱情鬼，當一個溫柔的熱情鬼!!",
		hlink: "portfolio/ghost.html",
		index: "45",
	},
	{
		images: ["/images/portfolio/small/illustration14.png"],
		img_height: 521,
		fullsrc: "/images/portfolio/full/illustration14.png",
		category: "illustration",
		note: "插畫練習 - 開心鬼，要頭髮快掉光光牙齒快掉光光也要開開心心的!!",
		hlink: "portfolio/ghost.html",
		index: "46",
	},
	{
		images: ["/images/portfolio/small/illustration15.png"],
		img_height: 520,
		fullsrc: "/images/portfolio/full/illustration15.png",
		category: "illustration",
		note: "插畫練習 - 韌性鬼，再倒楣也要勇敢面對每一天!!",
		hlink: "portfolio/ghost.html",
		index: "47",
	},
	{
		images: ["/images/portfolio/small/illustration16.png"],
		img_height: 298,
		fullsrc: "/images/portfolio/full/illustration16.png",
		category: "illustration",
		note: "插畫練習 - 滿足鬼，要像滿足鬼一樣，天天滿足的感謝上帝!!",
		hlink: "portfolio/ghost.html",
		index: "48",
	},
	{
		images: ["/images/portfolio/small/name1.jpg", "/images/portfolio/small/name7.jpg"],
		img_height: 930,
		fullsrc: "/images/portfolio/full/name1.jpg",
		category: "illustration",
		note: "夏令營名牌設計 - 這是給夏令營小朋友設計的名牌，共有六組加一款老師的名牌。",
		index: "53",
	},
	{
		images: ["/images/portfolio/small/illustration2.jpg"],
		img_height: 265,
		fullsrc: "/images/portfolio/full/illustration2.jpg",
		category: "illustration",
		note: "插畫練習 - 聖誕卡",
		hlink: "portfolio/christmas.html",
		index: "32",
	},
	{
		images: ["/images/portfolio/small/illustration3.jpg"],
		img_height: 291,
		fullsrc: "/images/portfolio/full/illustration3.jpg",
		category: "illustration",
		note: "插畫練習 - 三頭身的海賊。改為三頭身的Q版海賊。",
		hlink: "portfolio/ocean.html",
		index: "33",
	},
	{
		images: ["/images/portfolio/small/illustration4.jpg"],
		img_height: 291,
		fullsrc: "/images/portfolio/full/illustration4.jpg",
		category: "illustration",
		note: "插畫練習 - 愛心蜜蜂。以條紋的愛心為身體，對比色的配色，生動的姿勢",
		hlink: "portfolio/bee.html",
		index: "34",
	},
	{
		images: ["/images/portfolio/small/illustration5.jpg"],
		img_height: 503,
		fullsrc: "/images/portfolio/full/illustration5.jpg",
		category: "illustration",
		note: "插畫練習 - 塗鴉異想世界。鮮豔的前色配上留白的背景...",
		hlink: "portfolio/sketch.html",
		index: "35",
	},
	{
		images: ["/images/portfolio/small/illustration6.jpg"],
		img_height: 527,
		fullsrc: "/images/portfolio/full/illustration6.jpg",
		category: "illustration",
		note: "插畫練習 - 小小人兒。Painter的筆觸練習。",
		hlink: "portfolio/smallguy.html",
		index: "36",
	},
	{
		images: ["/images/portfolio/small/illustration8.jpg"],
		img_height: 506,
		fullsrc: "/images/portfolio/full/illustration8.jpg",
		category: "illustration",
		note: "插畫練習 - 機器娃娃。三頭身的機器娃娃，運用了 Illustrator 的漸層色票及繪圖樣式。",
		hlink: "portfolio/ebaby.html",
		index: "38",
	},
	{
		images: ["/images/portfolio/small/illustration9.jpg"],
		img_height: 503,
		fullsrc: "/images/portfolio/full/illustration9.jpg",
		category: "illustration",
		note: "插畫練習 - 花團錦簇。配色鮮艷，使用了Illustrator扭曲與變形效果、3D效果...",
		hlink: "portfolio/flowers.html",
		index: "40",
	},
	{
		images: ["/images/portfolio/small/book1.jpg"],
		img_height: 572,
		fullsrc: "/images/portfolio/full/book1.jpg",
		category: "illustration",
		note: "夏令營學生手冊封面 - 以清爽的白綠色為主軸，標題搭配一點對比色紅色，畫龍點睛。插圖，標準字皆為自己所繪製設計。希望活潑的版面能讓小朋友愉快地閱讀吸收。朋友愉快地閱讀吸收。",
		index: "49",
	},
	{
		images: ["/images/portfolio/small/book2.jpg"],
		img_height: 551,
		fullsrc: "/images/portfolio/full/book2.jpg",
		category: "illustration",
		note: "夏令營手冊 - 這是夏令營學生手冊第一課的封面。自己繪、設計的插圖，標準字，希望活潑的版面能讓小朋友愉快地閱讀吸收。",
		index: "50",
	},
	{
		images: ["/images/portfolio/small/book3.jpg"],
		img_height: 551,
		fullsrc: "/images/portfolio/full/book3.jpg",
		category: "illustration",
		note: "夏令營手冊 - 這是夏令營學生手冊第二課的封面。自己繪、設計的插圖，標準字，希望活潑的版面能讓小朋友愉快地閱讀吸收。",
		index: "51",
	},
	{
		images: ["/images/portfolio/small/book4.jpg"],
		img_height: 551,
		fullsrc: "/images/portfolio/full/book4.jpg",
		category: "illustration",
		note: "夏令營手冊 - 這是夏令營學生手冊第三課的封面。自己繪、設計的插圖，標準字，希望活潑的版面能讓小朋友愉快地閱讀吸收。",
		index: "52",
	},
	{
		images: ["/images/portfolio/small/illustration17.jpg"],
		img_height: 527,
		fullsrc: "/images/portfolio/full/illustration17.jpg",
		category: "illustration",
		note: "吉祥物設計練習 - 這是練習給憂鬱症防治機構的吉祥物-陽光小雞。這是小雞正面。",
		index: "54",
	},
	{
		images: ["/images/portfolio/small/illustration18.jpg"],
		img_height: 331,
		fullsrc: "/images/portfolio/full/illustration18.jpg",
		category: "illustration",
		note: "吉祥物設計練習 - 這是練習給憂鬱症防治機構的吉祥物-陽光小雞。這幅主題是擁抱。",
		index: "55",
	},
	{
		images: ["/images/portfolio/small/illustration19.jpg"],
		img_height: 527,
		fullsrc: "/images/portfolio/full/illustration19.jpg",
		category: "illustration",
		note: "吉祥物設計練習 - 這是練習給憂鬱症防治機構的吉祥物-陽光小雞。這幅主題是陪伴。",
		index: "56",
	},
	{
		images: ["/images/portfolio/small/illustration20.jpg"],
		img_height: 330,
		fullsrc: "/images/portfolio/full/illustration20.jpg",
		category: "illustration",
		note: "吉祥物設計練習 - 這是練習給憂鬱症防治機構的吉祥物-陽光小雞。這是小雞側面。",
		index: "57",
	},
	{
		images: ["/images/portfolio/small/illustration21.jpg"],
		img_height: 527,
		fullsrc: "/images/portfolio/full/illustration21.jpg",
		category: "illustration",
		note: "吉祥物設計練習 - 這是練習給憂鬱症防治機構的吉祥物-陽光小雞。這是小雞四分之三側面。",
		index: "58",
	},
];


let LoadingDiv = class LoadingDiv extends React.Component{
	constructor(props) {
		super(props);	
    }
	render() {		
		return (
			<div className="loading-wrap"><img src="//images/Preloader_8.gif" alt="" /></div>
		);
	}
};

LoadingDiv.propTypes = {
};


let HomePage = class HomePage extends React.Component{
	constructor(props) {
		super(props);	
	
		this.state = {
			height: "100vh"
		};
		this.updateHeight = this.updateHeight.bind(this);
    }
	componentDidMount() {
	}	
    updateHeight( height ) {
		this.setState({
			height
		});	
    }
	render() {
		let style = {height: this.state.height , width:"100%"};	
		return (
			<div id="home" >				
				<div id="containerb"  style={style}>
					<PinterestGrid items={items} columnWidth={280} gutter={20} columns={5} container="containerb" updateHeight={this.updateHeight}
						delay={100} device={this.props.device} hideDesc={false}/>					
				</div>
			</div>
		);
	}
};

HomePage.propTypes = {
	device:  React.PropTypes.object.isRequired
};

function mapStateToProps(state, ownProps) {
  return {
    device: state.device
  };
}

HomePage = connect(mapStateToProps)(
    connectDataFetchers(HomePage, [ getDevice ])
);


export default HomePage;
