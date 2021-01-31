if (process.env.BROWSER) {
	require ('./pinterestImg.sass');
}

import PropTypes from 'prop-types';

import React from 'react';
let PinterestImg = class PinterestImg extends React.Component{
	constructor(props) {
		super(props);
		this.handleImageLoaded = this.handleImageLoaded.bind(this);
	}
	componentWillReceiveProps(nextProps){
		if (nextProps.src === this.props.src)
			return;

		this.props.updateLoaded(this.props.id, false, 0);
	}
	componentDidUpdate(prevProps) {
		if (prevProps.src === this.props.src)
			return;
		let img = this.Img;
		if (img && img.complete && img.naturalHeight !== 0){
			this.props.updateLoaded(this.props.id, true, img.clientHeight);
		}		
	}
	componentDidMount() {
		let img = this.Img;
		if (img && img.complete && img.naturalHeight !== 0){
			this.props.updateLoaded(this.props.id, true, img.clientHeight);
		}
	}
	handleImageLoaded(e){
		this.props.updateLoaded(this.props.id, true, e.target.clientHeight);
	}
	render() {
		// let img = (this.props.showImage) ? this.props.src : this.props.loader;
		let img =  this.props.src;
		return (
			<div className="pinterest-img">
				<img src={img} alt={this.props.alt} title={this.props.alt}  onLoad={this.handleImageLoaded} ref={(el) => { this.Img = el; }}/>
			</div>
		);
	}
};

PinterestImg.defaultProps = {
	alt: "",
};
PinterestImg.propTypes = {
	src: PropTypes.string.isRequired,
	id: PropTypes.number,
	alt: PropTypes.string,
	updateLoaded: PropTypes.func,
	ssr: PropTypes.bool.isRequired,
};

export {PinterestImg};
