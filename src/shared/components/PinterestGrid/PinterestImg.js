if (process.env.BROWSER) {
	require ('./pinterestImg.sass');
}

import React from 'react';
let PinterestImg = class PinterestImg extends React.Component{
	constructor(props) {
		super(props);
		this.state = {
			show: false
		};
		// this.updatePosition = this.updatePosition.bind(this);
		this.handleImageLoaded = this.handleImageLoaded.bind(this);
	}
	componentDidUpdate(prevProps) {
	}
	componentDidMount() {
		
	}
	handleImageLoaded(e){
		this.setState({
			show: true,
		});

		// use this to get total hight!!!!!!!!!!!!!!!!!!!!!!!!
		// this.props.updateLoaded(this.props.id, true, e.target.clientHeight);
		// use this to get total hight!!!!!!!!!!!!!!!!!!!!!!!!
	}
	render() {
		// let img = (this.props.showImage) ? this.props.src : this.props.loader;
		let img =  this.props.src;
		let show = this.state.show || this.props.ssr;
		let style = {opacity:  show?"1":"0"};
		return (
			<div className="pinterest-img">
				<img src={img} alt={this.props.alt} style={style} onLoad={this.handleImageLoaded}/>
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
	ssr: React.PropTypes.bool.isRequired,
};

export {PinterestImg};
