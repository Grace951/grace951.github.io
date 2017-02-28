if (process.env.BROWSER) {
	require ('./gp.sass');
}
import React from 'react';
import { connect } from 'react-redux';

import { getDevice } from '../../actions/deviceAction';
import connectDataFetchers from '../../lib/connectDataFetchers.jsx';
import {PinterestGrid} from '../PinterestGrid/PinterestGrid';

let items = [{
		images: ["/images/portfolio/small/poster1.jpg"],
		title: "廣告練習 - 飛利浦奶瓶",
		img_height: 371,
		fullsrc: "/images/portfolio/full/poster1.jpg",
		category: "poster",
		hlink: "portfolio/avent.html",
		index: "0",
	},{
		images: ["/images/portfolio/small/poster2.jpg"],
		title: "廣告練習 - iPhone6 廣告",
		img_height: 371,
		fullsrc: "/images/portfolio/full/poster2.jpg",
		category: "poster",
		hlink: "portfolio/iphone-dark.html",
		index: "1",
	},{
		images: ["/images/portfolio/small/poster3.jpg"],
		title: "廣告練習 - Vera Wang 婚紗廣告",
		img_height: 381,
		fullsrc: "/images/portfolio/full/poster3.jpg",
		category: "poster",
		hlink: "portfolio/vw-wang.html",
		index: "2",
	},{
		images: ["/images/portfolio/small/photo1.jpg"],
		title: "PS修補練習 - 人臉瘦身化妝",
		img_height: 196,
		fullsrc: "/images/portfolio/full/photo1.jpg",
		category: "Misc",
		hlink: "portfolio/makeup.html",
		index: "3",
	},{
		images: ["/images/portfolio/small/photo2.jpg"],
		title: "PS特效練習 - 水彩效果",
		img_height: 177,
		fullsrc: "/images/portfolio/full/photo2.jpg",
		category: "Misc",
		hlink: "portfolio/watercolor.html",
		index: "4",
	},{
		images: ["/images/portfolio/small/photo3.jpg"],
		title: "PS特效練習 - 油畫效果",
		img_height: 177,
		fullsrc: "/images/portfolio/full/photo3.jpg",
		category: "Misc",
		hlink: "portfolio/oilcolor.html",
		index: "5",
	},{
		images: ["/images/portfolio/small/poster5.jpg"],
		title: "廣告練習 - 克蘭詩化妝品廣告",
		img_height: 380,
		fullsrc: "/images/portfolio/full/poster5.jpg",
		category: "poster",
		hlink: "portfolio/clarins.html",
		index: "6",
	},{
		images: ["/images/portfolio/small/poster6.jpg"],
		title: "廣告練習 - iPhone6 廣告",
		img_height: 370,
		fullsrc: "/images/portfolio/full/poster6.jpg",
		category: "poster",
		hlink: "portfolio/iphone-light.html",
		index: "7",
	},{
		images: ["/images/portfolio/small/poster7.jpg"],
		title: "營會招募活動DM",
		img_height: 381,
		fullsrc: "/images/portfolio/full/poster7.jpg",
		category: "poster",
		hlink: "portfolio/five.html",
		index: "8",
	},{
		images: ["/images/portfolio/small/food4.jpg"],
		title: "雜誌排版練習",
		img_height: 192,
		fullsrc: "/images/portfolio/full/food4.jpg",
		category: "editorial",
		hlink: "portfolio/food4.html",
		index: "9",
	},{
		images: ["/images/portfolio/small/poster4.jpg"],
		title: "廣告練習 - Nike 球鞋廣告",
		img_height: 196,
		fullsrc: "/images/portfolio/full/poster4.jpg",
		category: "poster",
		hlink: "portfolio/nike.html",
		index: "10",
	},{
		images: ["/images/portfolio/small/food1.jpg"],
		title: "雜誌排版練習",
		img_height: 192,
		fullsrc: "/images/portfolio/full/food1.jpg",
		category: "editorial",
		hlink: "portfolio/food1.html",
		index: "11",
	},{
		images: ["/images/portfolio/small/branding2.jpg"],
		title: "LOGO練習 - Direction Book Store",
		img_height: 192,
		fullsrc: "/images/portfolio/full/branding2.jpg",
		category: "branding",
		hlink: "portfolio/branding2.html",
		index: "12",
	},{
		images: ["/images/portfolio/small/branding4.jpg"],
		title: "LOGO練習 - Shen Book Store",
		img_height: 192,
		fullsrc: "/images/portfolio/full/branding4.jpg",
		category: "branding",
		hlink: "portfolio/branding4.html",
		index: "13",
	},{
		images: ["/images/portfolio/small/branding3.jpg"],
		title: "LOGO練習 - Shen Book Store",
		img_height: 191,
		fullsrc: "/images/portfolio/full/branding3.jpg",
		category: "branding",
		hlink: "portfolio/branding3.html",
		index: "14",
	},{
		images: ["/images/portfolio/small/food3.jpg"],
		title: "雜誌排版練習",
		img_height: 192,
		fullsrc: "/images/portfolio/full/food3.jpg",
		category: "editorial",
		hlink: "portfolio/food3.html",
		index: "15",
	},{
		images: ["/images/portfolio/small/food2.jpg"],
		title: "雜誌排版練習",
		img_height: 192,
		fullsrc: "/images/portfolio/full/food2.jpg",
		category: "editorial",
		hlink: "portfolio/food2.html",
		index: "16",
	},{
		images: ["/images/portfolio/small/food5.jpg"],
		title: "雜誌排版練習",
		img_height: 192,
		fullsrc: "/images/portfolio/full/food5.jpg",
		category: "branding",
		hlink: "portfolio/food5.html",
		index: "17",
	},{
		images: ["/images/portfolio/small/DM1.jpg"],
		title: "DM設計練習-木擊者",
		img_height: 191,
		fullsrc: "/images/portfolio/full/DM1.jpg",
		category: "DM",
		hlink: "portfolio/witness.html",
		index: "18",
	},{
		images: ["/images/portfolio/small/DM3.jpg"],
		title: "三摺兩面DM設計練習-aveda外頁",
		img_height: 180,
		fullsrc: "/images/portfolio/full/DM3.jpg",
		category: "DM",
		hlink: "portfolio/aveda1.html",
		index: "19",
	},{
		images: ["/images/portfolio/small/DM4.jpg"],
		title: "三摺兩面DM設計練習-aveda內頁",
		img_height: 180,
		fullsrc: "/images/portfolio/full/DM4.jpg",
		category: "DM",
		hlink: "portfolio/aveda2.html",
		index: "20",
	},{
		images: ["/images/portfolio/small/DM2.jpg"],
		title: "DM設計練習-仲向",
		img_height: 192,
		fullsrc: "/images/portfolio/full/DM2.jpg",
		category: "DM",
		hlink: "portfolio/dm2.html",
		index: "21",
	},{
		images: ["/images/portfolio/small/web3.jpg"],
		title: "課程 banner",
		img_height: 106,
		fullsrc: "/images/portfolio/full/web3.jpg",
		category: "Web banner",
		hlink: "portfolio/baby.html",
		index: "22",
	},{
		images: ["/images/portfolio/small/web5.jpg"],
		title: "課程 banner",
		img_height: 106,
		fullsrc: "/images/portfolio/full/web5.jpg",
		category: "Web banner",
		hlink: "portfolio/young.html",
		index: "23",
	},{
		images: ["/images/portfolio/small/web4.jpg"],
		title: "課程 banner",
		img_height: 106,
		fullsrc: "/images/portfolio/full/web4.jpg",
		category: "Web banner",
		hlink: "portfolio/tellstory.html",
		index: "24",
	},{
		images: ["/images/portfolio/small/poster8.jpg"],
		title: "廣告練習 - 美好人生淡香水廣告",
		img_height: 381,
		fullsrc: "/images/portfolio/full/poster8.jpg",
		category: "poster",
		hlink: "portfolio/happylife.html",
		index: "25",
	},{
		images: ["/images/portfolio/small/edm1.jpg"],
		title: "eDM設計練習 - 洗衣機",
		img_height: 506,
		fullsrc: "/images/portfolio/full/edm1.jpg",
		category: "edm",
		hlink: "portfolio/edm1.html",
		index: "27",
	},{
		images: ["/images/portfolio/small/branding5.jpg"],
		title: "VI 練習 - Direction Publishing",
		img_height: 179,
		fullsrc: "/images/portfolio/full/branding5.jpg",
		category: "branding",
		hlink: "portfolio/directions.html",
		index: "26",
	},{
		images: ["/images/portfolio/small/branding12.jpg"],
		title: "T-Shirt 閱向未來1",
		img_height: 381,
		fullsrc: "/images/portfolio/full/branding12.jpg",
		category: "branding",
		hlink: "portfolio/future1.html",
		index: "28",
	},{
		images: ["/images/portfolio/small/branding13.jpg"],
		title: "T-Shirt 閱向未來2",
		img_height: 382,
		fullsrc: "/images/portfolio/full/branding13.jpg",
		category: "branding",
		hlink: "portfolio/future2.html",
		index: "29",
	},{
		images: ["/images/portfolio/small/branding14.jpg"],
		title: "T-Shirt Let's Read",
		img_height: 382,
		fullsrc: "/images/portfolio/full/branding14.jpg",
		category: "branding",
		hlink: "portfolio/letsread.html",
		index: "30",
	},{
		images: ["/images/portfolio/small/illustration15.png"],
		title: "插畫練習 - 韌性鬼",
		img_height: 397,
		fullsrc: "/images/portfolio/full/illustration15.png",
		category: "illustration",
		index: "47",
	},{
		images: ["/images/portfolio/small/illustration16.png"],
		title: "插畫練習 - 滿足鬼",
		img_height: 183,
		fullsrc: "/images/portfolio/full/illustration16.png",
		category: "illustration",
		index: "48",
	},{
		images: ["/images/portfolio/small/illustration1.jpg"],
		title: "插畫練習 - 小天使",
		img_height: 172,
		fullsrc: "/images/portfolio/full/illustration1.jpg",
		category: "illustration",
		hlink: "portfolio/angel.html",
		index: "31",
	},{
		images: ["/images/portfolio/small/name7.jpg"],
		title: "夏令營名牌設計",
		img_height: 396,
		fullsrc: "/images/portfolio/full/name0.jpg",
		category: "illustration",
		index: "53",
	},{
		images: ["/images/portfolio/small/illustration2.jpg"],
		title: "插畫練習 - 聖誕卡",
		img_height: 184,
		fullsrc: "/images/portfolio/full/illustration2.jpg",
		category: "illustration",
		hlink: "portfolio/christmas.html",
		index: "32",
	},{
		images: ["/images/portfolio/small/illustration3.jpg"],
		title: "插畫練習 - 三頭身的海賊",
		img_height: 176,
		fullsrc: "/images/portfolio/full/illustration3.jpg",
		category: "illustration",
		hlink: "portfolio/ocean.html",
		index: "33",
	},{
		images: ["/images/portfolio/small/illustration11.png"],
		title: "插畫練習 - 愛哭鬼",
		img_height: 397,
		fullsrc: "/images/portfolio/full/illustration11.png",
		category: "illustration",
		index: "43",
	},{
		images: ["/images/portfolio/small/illustration4.jpg"],
		title: "插畫練習 - 小蜜蜂",
		img_height: 176,
		fullsrc: "/images/portfolio/full/illustration4.jpg",
		category: "illustration",
		hlink: "portfolio/bee.html",
		index: "34",
	},{
		images: ["/images/portfolio/small/illustration5.jpg"],
		title: "插畫練習 - 塗鴉異想世界",
		img_height: 381,
		fullsrc: "/images/portfolio/full/illustration5.jpg",
		category: "illustration",
		hlink: "portfolio/sketch.html",
		index: "35",
	},{
		images: ["/images/portfolio/small/illustration13.png"],
		title: "插畫練習 - 熱情鬼",
		img_height: 397,
		fullsrc: "/images/portfolio/full/illustration13.png",
		category: "illustration",
		index: "45",
	},{
		images: ["/images/portfolio/small/illustration6.jpg"],
		title: "插畫練習 - 小小人兒",
		img_height: 384,
		fullsrc: "/images/portfolio/full/illustration6.jpg",
		category: "illustration",
		hlink: "portfolio/smallguy.html",
		index: "36",
	},{
		images: ["/images/portfolio/small/illustration7.jpg"],
		title: "插畫練習 - 各年齡層的小人兒",
		img_height: 381,
		fullsrc: "/images/portfolio/full/illustration7.jpg",
		category: "illustration",
		hlink: "portfolio/people.html",
		index: "37",
	},{
		images: ["/images/portfolio/small/illustration14.png"],
		title: "插畫練習 - 開心鬼",
		img_height: 398,
		fullsrc: "/images/portfolio/full/illustration14.png",
		category: "illustration",
		index: "46",
	},{
		images: ["/images/portfolio/small/edm2.jpg"],
		title: "eDM設計練習 - 吸塵器",
		img_height: 510,
		fullsrc: "/images/portfolio/full/edm2.jpg",
		category: "edm",
		hlink: "portfolio/edm2.html",
		index: "39",
	},{
		images: ["/images/portfolio/small/illustration8.jpg"],
		title: "插畫練習 - 機器娃娃",
		img_height: 381,
		fullsrc: "/images/portfolio/full/illustration8.jpg",
		category: "illustration",
		hlink: "portfolio/ebaby.html",
		index: "38",
	},{
		images: ["/images/portfolio/small/illustration9.jpg"],
		title: "插畫練習 - 花",
		img_height: 382,
		fullsrc: "/images/portfolio/full/illustration9.jpg",
		category: "illustration",
		hlink: "portfolio/flowers.html",
		index: "40",
	},{
		images: ["/images/portfolio/small/web1.jpg"],
		title: "活動員徵選 banner",
		img_height: 106,
		fullsrc: "/images/portfolio/full/web1.jpg",
		category: "Web banner",
		hlink: "portfolio/events.html",
		index: "41",
	},{
		images: ["/images/portfolio/small/web2.jpg"],
		title: "課程 banner",
		img_height: 106,
		fullsrc: "/images/portfolio/full/web2.jpg",
		category: "Web banner",
		hlink: "portfolio/boy.html",
		index: "42",
	},{
		images: ["/images/portfolio/small/illustration12.png"],
		title: "插畫練習 - 頑皮鬼",
		img_height: 397,
		fullsrc: "/images/portfolio/full/illustration12.png",
		category: "illustration",
		index: "44",
	},{
		images: ["/images/portfolio/small/book1.jpg"],
			title: "夏令營學生手冊封面",
			img_height: 378,
		fullsrc: "/images/portfolio/full/book1.jpg",
		category: "illustration",
		index: "49",
	},{
		images: ["/images/portfolio/small/book2.jpg"],
		title: "夏令營學生手冊第一課",
		img_height: 381,
		fullsrc: "/images/portfolio/full/book2.jpg",
		category: "illustration",
		index: "50",
	},{
		images: ["/images/portfolio/small/book3.jpg"],
		title: "夏令營學生手冊第二課",
		img_height: 381,
		fullsrc: "/images/portfolio/full/book3.jpg",
		category: "illustration",
		index: "51",
	},{
		images: ["/images/portfolio/small/book4.jpg"],
		title: "夏令營學生手冊第三課",
		img_height: 381,
		fullsrc: "/images/portfolio/full/book4.jpg",
		category: "illustration",
		index: "52",
	},{
		images: ["/images/portfolio/small/illustration17.jpg"],
		title: "吉祥物設計練習 - 陽光小雞",
		img_height: 381,
		fullsrc: "/images/portfolio/full/illustration17.jpg",
		category: "illustration",		
		index: "54",
	},{
		images: ["/images/portfolio/small/illustration18.jpg"],
		title: "吉祥物設計練習 - 陽光小雞",
		img_height: 191,
		fullsrc: "/images/portfolio/full/illustration18.jpg",
		category: "illustration",		
		index: "55",
	},{
		images: ["/images/portfolio/small/illustration19.jpg"],
		title: "吉祥物設計練習 - 陽光小雞",
		img_height: 381,
		fullsrc: "/images/portfolio/full/illustration19.jpg",
		category: "illustration",		
		index: "56",
	},{
		images: ["/images/portfolio/small/illustration20.jpg"],
		title: "吉祥物設計練習 - 陽光小雞",
		img_height: 381,
		fullsrc: "/images/portfolio/full/illustration20.jpg",
		category: "illustration",		
		index: "57",
	},{
		images: ["/images/portfolio/small/illustration21.jpg"],
		title: "吉祥物設計練習 - 陽光小雞",
		img_height: 381,
		fullsrc: "/images/portfolio/full/illustration21.jpg",
		category: "illustration",		
		index: "58",
	}];

let GraphicPage = class GraphicPage extends React.Component{
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
	<section id="graphicdesign-section">
        <div className="container">
              <div className="row">
                <div className="col-md-2 col-sm-2">
                   <h2 id="gp-title" className="cat-right right ">平面<br/>設計</h2>
                </div>
              </div>
              <div className="row">
               <div className="col-lg-offset-2 col-lg-10 col-md-offset-2 col-md-10 col-sm-offset-1 col-sm-11">
                 <div id="graphic-design"  style={style}>
					<PinterestGrid items={items} columnWidth={300} gutter={15} columns={3} container="graphic-design" 
						updateHeight={this.updateHeight} delay={100} device={this.props.device} hideDesc={true}/>					
				</div>
              </div>
            </div>
        </div>
    </section>
		);
	}
};



GraphicPage.propTypes = {
	device:  React.PropTypes.object.isRequired
};

function mapStateToProps(state, ownProps) {
  return {
    device: state.device
  };
}

GraphicPage = connect(mapStateToProps)(
    connectDataFetchers(GraphicPage, [ getDevice ])
);

export default GraphicPage;
