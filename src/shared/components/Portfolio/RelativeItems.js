import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';


let RelativeItems = ({portfolio, relative, parentIndex}) => {
	if(relative.img && Array.isArray(relative.img)){
		if(imgItem.index){
			return (
			<div>
				{relative.img.map( (imgItem, i) => {								
					let relaiveItem = (imgItem.index < portfolio.length && portfolio[imgItem.index]) || {};
					return (
						<Link key={i} to={`/portfolio/${imgItem.index||parentIndex}`}>
							<img className="img-responsive other-img" src={imgItem.src} 
								alt={`${relaiveItem.title||''} - ${relaiveItem.desc||''}`} title={`${relaiveItem.title||''} - ${relaiveItem.desc||''}`} />
						</Link>
						);
					})
				}
			</div>)
		}
		return (
		<div>
			{relative.img.map( (imgItem, i) => {								
				let relaiveItem = (imgItem.index < portfolio.length && portfolio[imgItem.index]) || {};
				return (
					<img key={i} className="img-responsive other-img" src={imgItem.src} 
						alt={`${relaiveItem.title||''} - ${relaiveItem.desc||''}`} title={`${relaiveItem.title||''} - ${relaiveItem.desc||''}`} />
					);
				})
			}
		</div>)
	}
	
	let imgItem = relative.img;								
	let relaiveItem = (imgItem.index < portfolio.length && portfolio[imgItem.index]) || {};
	if(imgItem.index){
		return (
			<div>
				<Link to={`/portfolio/${imgItem.index||parentIndex}`}>
					<img className="img-responsive other-img" src={imgItem.src} 
						alt={`${relaiveItem.title||''} - ${relaiveItem.desc||''}`} title={`${relaiveItem.title||''} - ${relaiveItem.desc||''}`} />
				</Link>
			</div>)

	}
	return (
		<img className="img-responsive other-img" src={imgItem.src} 
			alt={`${relaiveItem.title||''} - ${relaiveItem.desc||''}`} title={`${relaiveItem.title||''} - ${relaiveItem.desc||''}`} />
	);
};


RelativeItems.propTypes = {
	relative: PropTypes.object.isRequired,	
	parentIndex: PropTypes.string.isRequired,	
};
function mapStateToProps(state, ownProps) {
	return {
	  portfolio: state.portfolio
	};
}
RelativeItems = connect(mapStateToProps)(RelativeItems);
export default RelativeItems;
