import '../global.sass';
import './details.sass';
import React from 'react';
import { Link } from 'react-router-dom';
import RelativeItems from './RelativeItems';
import { connect } from 'react-redux';
import { loadPortfolio, loadDetails } from '../../actions/portfolioActions';

let DetailsPage = class DetailsPage extends React.Component{
	constructor(props) {
		super(props);
		this.state={
			showImg: false
		}
		this.handleImageLoaded = this.handleImageLoaded.bind(this);
	}
	componentDidUpdate(prevProps) {
		let {match:{params}, loadDetails} = this.props;
		if (prevProps.match.params.id == params.id){
			return;
		}
		else{
			this.setState({showImg: false});
		}
		loadDetails({params});
		let bigImg = this.bigImg;
		if (!this.state.showImg && bigImg && bigImg.complete && bigImg.naturalHeight !== 0){
			this.setState({showImg: true});
		}
	}
	componentDidMount() {
		let {match:{params}, loadDetails, loadPortfolio} = this.props;
		loadDetails({params});
		loadPortfolio({params});
		let bigImg = this.bigImg;
		if (!this.state.showImg && bigImg && bigImg.complete && bigImg.naturalHeight !== 0){
			this.setState({showImg: true});
		}
	}
	handleImageLoaded(e){
		this.setState({showImg: true});
	}	
	render() {
		let {match:{params}, details, portfolio} = this.props;
		let id = parseInt(params.id);
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
                   <h2 className="cat-left">{details.title}</h2>
                </div>
                <div className="col-lg-offset-7 col-lg-2 col-md-8 col-sm-6 work-change">
                    <div className="nextpre">
						<Link to={`/portfolio/${(id + portfolio.length + 1) % portfolio.length}`}><div className="next" ><img src="/images/navigate_next-white-18dp.svg" alt=""/></div></Link>
						<Link to={`/portfolio/${(id + portfolio.length - 1) % portfolio.length}`}><div className="prev" ><img src="/images/navigate_before-white-18dp.svg" alt=""/></div></Link>
                    </div>
                    <div className="back">
                        <Link to="/portfolio/graphic"><div className="backtop">Top</div></Link>
                    </div>

                </div>
            </div>
            <div className="row ">
				<div className="col-lg-2 col-sm-3 col-xs-12 work-desc">
					<div className="bigimgdesc">
						<p> {details.desc}
						</p>
					</div>
					{ details.relative && details.relative.img &&
						<div className="hidden-xs relative">
							<div className="others-title">相關作品圖片</div>
							<RelativeItems relative={details.relative} parentIndex={details.index}/>
						</div>
					}
				</div>
				<div className="col-lg-10 col-sm-9 col-xs-12 ">
					<div className="bigimg loading" style={bigImgWrapStyle} >
						<img className="img-responsive" src={details.img} alt={`${details.title} - ${details.desc}`} title={`${details.title} - ${details.desc}`} 
							onLoad={this.handleImageLoaded}  style={bigImgStyle} ref={(el) => { this.bigImg = el; }}/>
					</div>
					{ details.relative && details.relative.img &&
						<div className="visible-xs relative">
							<div className="others-title">相關作品圖片</div>
							<RelativeItems relative={details.relative} parentIndex={details.index}/>
						</div>
					}
				</div>
			</div>
			<div className="row">
				<div className="col-xs-12">
					<div className="nextpre">
						<Link to={`/portfolio/${(id + portfolio.length + 1) % portfolio.length}`}><div className="next" ><img src="/images/navigate_next-white-18dp.svg" alt=""/></div></Link>
						<Link to={`/portfolio/${(id + portfolio.length - 1) % portfolio.length}`}><div className="prev" ><img src="/images/navigate_before-white-18dp.svg" alt=""/></div></Link>
					</div>
					<div className="back">
						<Link to="/portfolio/graphic"><div className="backtop">Top</div></Link>
					</div>
				</div>
			</div>
		</div>
    </section>
		);
	}
};

function mapStateToProps(state, ownProps) {
	return {
	  details: state.details,
	  portfolio: state.portfolio
	};
}
DetailsPage.serverFetch =  [ loadPortfolio, loadDetails ];
DetailsPage = connect(mapStateToProps,{loadDetails, loadPortfolio})(DetailsPage);
export default DetailsPage;
