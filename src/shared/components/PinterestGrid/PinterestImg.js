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
	// updatePosition() {
	// 	let el = this.img;
	// 	this.props.updateImagePosition(el.offsetTop, el.offsetHeight);
	// }
	handleImageLoaded(e){
		// console.log(e.target.clientHeight);
		this.props.updateLoaded(this.props.id, true, e.target.clientHeight);
	}
	render() {
		// let img = (this.props.showImage) ? this.props.src : this.props.loader;
		let img =  this.props.src;
		return (
			<div className="pinterest-img">
				<img src={img} alt={this.props.alt} onLoad={this.handleImageLoaded}/>
			</div>
		);
	}
};

PinterestImg.defaultProps = {
	showImage: false,
	alt: "",
	loader: "/images/Preloader_8.gif",
};
PinterestImg.propTypes = {
	showImage: React.PropTypes.bool.isRequired,
	src: React.PropTypes.string.isRequired,
	id: React.PropTypes.number.isRequired,
	alt: React.PropTypes.string.isRequired,
	loader: React.PropTypes.string.isRequired,
	updateImagePosition: React.PropTypes.func.isRequired,
	updateLoaded: React.PropTypes.func.isRequired,
};

export {PinterestImg};
