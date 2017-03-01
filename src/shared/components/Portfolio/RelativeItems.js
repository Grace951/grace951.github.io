import React from 'react';
import { Link } from 'react-router';
let worksData = require('../../data/works.json').mywork.works;

const RelativeItems = (props) => {
	return (
	<div>
		{props.relative.img.map( (imgItem, i) => {								
			let relaiveItem = (imgItem.index < worksData.length && worksData[imgItem.index]) || {};
			return (
				<Link key={i} to={`/portfolio/${imgItem.index||props.parentIndex}`}>
					<img className="img-responsive other-img" src={imgItem.src} 
						alt={`${relaiveItem.title||''} - ${relaiveItem.desc||''}`} title={`${relaiveItem.title||''} - ${relaiveItem.desc||''}`} />
				</Link>
				);
			})
		}
	</div>)
};

RelativeItems.propTypes = {
	relative: React.PropTypes.object.isRequired,	
	parentIndex: React.PropTypes.string.isRequired,	
};

export default RelativeItems;
