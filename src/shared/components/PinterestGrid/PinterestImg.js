if (process.env.BROWSER) {
	require ('./pinterestImg.sass');
}

import React from 'react';
let PinterestImg = class PinterestImg extends React.Component{
	constructor(props) {
		super(props);
		// this.updatePosition = this.updatePosition.bind(this);
		this.handleImageLoaded = this.handleImageLoaded.bind(this);
	}
	componentDidUpdate(prevProps) {
	}
	handleImageLoaded(e){
		this.props.updateLoaded(this.props.id, true, e.target.clientHeight);
	}
	render() {
		// let img = (this.props.showImage) ? this.props.src : this.props.loader;
		let img =  this.props.src;
		return (
			<div className="pinterest-img">
				<img src={img} alt={this.props.alt} /*onLoad={this.handleImageLoaded}*//>
			</div>
		);
	}
};

PinterestImg.defaultProps = {
	alt: "",
};
PinterestImg.propTypes = {
	src: React.PropTypes.string.isRequired,
	id: React.PropTypes.number,
	alt: React.PropTypes.string,
	updateLoaded: React.PropTypes.func,
};

export {PinterestImg};
