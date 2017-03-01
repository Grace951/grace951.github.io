if (process.env.BROWSER) {
	require ('../global.sass');
	require ('./details.sass');
}
import React from 'react';
import { Link } from 'react-router';

let worksData = require('../../data/works.json').mywork.works;

let DetailsPage = class DetailsPage extends React.Component{
	constructor(props) {
		super(props);
		this.state={
			showImg: false
		}
		this.handleImageLoaded = this.handleImageLoaded.bind(this);
	}
	componentDidUpdate(prevProps) {
		if (prevProps.params.id === this.props.params.id)
			return;

		let bigImg = this.bigImg;
		if (!this.state.showImg && bigImg && bigImg.complete && bigImg.naturalHeight !== 0){
			this.setState({showImg: true});
		}
	}
	componentDidMount() {
		let bigImg = this.bigImg;
		if (!this.state.showImg && bigImg && bigImg.complete && bigImg.naturalHeight !== 0){
			this.setState({showImg: true});
		}
	}
	handleImageLoaded(e){
		this.setState({showImg: true});
	}	
	render() {
		let id = parseInt(this.props.params.id);
		let item = (id < worksData.length && worksData[id]) || {};
		let bigImgStyle = {
			opacity: this.state.showImg?"1":"0"
		} ;
		let bigImgWrapStyle = {
			width: (this.state.showImg && this.bigImg && this.bigImg.naturalWidth)?(this.bigImg.naturalWidth + 30):"100%"
		} ;
	return (
	<section id="detailinfo">
        <div className="container">
            <div className="row">
                <div className="col-lg-3 col-md-4 col-sm-6 col-xs-12 work-title">
                   <h2 className="cat-left">{item.title}</h2>
                </div>
                <div className="col-lg-offset-7 col-lg-2 col-md-8 col-sm-6 work-change">
                    <div className="nextpre">
						<Link to={`/portfolio/${(id + worksData.length + 1) % worksData.length}`}><div className="next" ><i className="fa fa-angle-right"/></div></Link>
						<Link to={`/portfolio/${(id + worksData.length - 1) % worksData.length}`}><div className="prev" ><i className="fa fa-angle-left"/></div></Link>
                    </div>
                    <div className="back">
                        <Link to="/portfolio/graphic"><div className="backtop">top</div></Link>
                    </div>

                </div>
            </div>
            <div className="row ">
				<div className="col-lg-2 col-sm-3 col-xs-12 work-desc">
					<div className="bigimgdesc">
						<p> {item.desc}
						</p>
					</div>
					{ item.relative && item.relative.img &&
						<div className="hidden-xs relative">
							<div className="others-title">相關作品圖片</div>
							{item.relative.img.map( (item, id) => (
								<Link key={id} to={`/portfolio/${item.index}`}>
									<img className="img-responsive other-img" src={item.src}/>
								</Link>
							))}
						</div>
					}
				</div>
				<div className="col-lg-10 col-sm-9 col-xs-12 ">
					<div className="bigimg loading" style={bigImgWrapStyle} >
						<img className="img-responsive" src={item.img} alt="" onLoad={this.handleImageLoaded}  style={bigImgStyle} ref={(el) => { this.bigImg = el; }}/>
					</div>
					{ item.relative && item.relative.img &&
						<div className="visible-xs relative">
							<div className="others-title">相關作品圖片</div>
							{item.relative.img.map( (item, id) => (
								<Link key={id} to={`/portfolio/${item.index}`}>
									<img className="img-responsive other-img" src={item.src}/>
								</Link>
							))}
						</div>
					}
				</div>
			</div>
			<div className="row">
				<div className="col-xs-12">
					<div className="nextpre">
						<Link to={`/portfolio/${(id + worksData.length + 1) % worksData.length}`}><div className="next" ><i className="fa fa-angle-right"/></div></Link>
						<Link to={`/portfolio/${(id + worksData.length - 1) % worksData.length}`}><div className="prev" ><i className="fa fa-angle-left"/></div></Link>
					</div>
					<div className="back">
						<Link to="/portfolio/graphic"><div className="backtop">top</div></Link>
					</div>
				</div>
			</div>
		</div>
    </section>
		);
	}
};


DetailsPage.propTypes = {
};

export default DetailsPage;
