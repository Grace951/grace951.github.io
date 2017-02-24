if (process.env.BROWSER) {
	require ('./pinterestItem.sass');
}
import React from 'react';
import { PinterestImg } from './PinterestImg';
let PinterestItem = class PinterestItem extends React.Component{
	constructor(props) {
		super(props);
		let top;
		let left;
		this.state = {
			loadedImg: Array.from({ length: props.item.images.length }, () => ( {loaded: false, height: 0})), 			
			done: false,
			top: props.top,
			left: props.left,
		}
		this.updateImagePosition = this.updateImagePosition.bind(this);
		this.setShowImage = this.setShowImage.bind(this);
		this.updateLoaded = this.updateLoaded.bind(this);
	}
	componentWillReceiveProps(nextProps){
		if (nextProps.reRender && this.props.reRender !== nextProps.reRender){			
			this.setState(
				{
					top: nextProps.top,
					left: nextProps.left,
					reRender: true
				}
			);
		}
	}
	componentDidMount() {
	}
	componentWillMount() {
	}
	componentDidUpdate(prevProps, prevState) {
		if(this.state.reRender){
			this.props.updateLoaded(this.props.id, true, this.props.colid,  this.totoalHight);
			this.setState(
				{					
					reRender: false
				}
			);
		}
	}
	
	updateImagePosition (top, height) {
		// image is already displayed, no need to check anything
		if (this.state.done) {
			return;
		}

		// update showImage state if component element is in the viewport
		let min = this.props.viewport.top;
		let max = this.props.viewport.top + this.props.viewport.height;

		if ((min <= (top + height) && top <= (max - 300))) {
			this.setShowImage(this.props.id, true);
		}
	}
	setShowImage(id, show) {
		let l = [...this.state.loadedImg];
		this.setState({
			loadedImg: [...l.slice(0, id), !!show, ...l.slice(id, l.length)],
			done: (l.filter((i)=>!i).length <= 0)
		});
	}
    updateLoaded(id, done, height ) {
		let l = [...this.state.loadedImg];
		l[id] = {loaded: !!done, height};
		let d = (l.filter((i)=>!i.loaded).length <= 0);
		this.setState({
			loadedImg: l,
			done: d
		});	
		if (d) {
			let totoalHight = this.ItemDesc.clientHeight + l.reduce((acc, val)=>(acc + val.height),0);
			this.props.updateLoaded(this.props.id, true, this.props.colid,  totoalHight );
			this.totoalHight = totoalHight;	
		}		
    }
	render() {
		// console.log(this.props);
		let {item} = this.props;
		let style = {top: this.state.top, left: this.state.left };
		return (
			<div className="pinterest-item" style={style}  >
				<div >
				{
					item.images.map((image,id) => (
						<PinterestImg src={image} key={id} id={id} viewport={this.props.viewport} showImage={this.state.loadedImg[id].loaded}
							updateImagePosition={this.updateImagePosition} updateLoaded={this.updateLoaded} />
					))
				}
				</div>
				<div className="pinterest-item-desc"  ref={(el) => { this.ItemDesc = el; }} >	
					<div className="pinterest-item-desc-text">{item.note} </div>
					<div className="pinterest-item-desc-title">{item.title}</div>
				</div>
			</div>
		);
	}
};

PinterestItem.defaultProps = {
	showImage: false,
};
PinterestItem.propTypes = {
	viewport: React.PropTypes.object.isRequired,
	showImage: React.PropTypes.bool.isRequired,
	reRender: React.PropTypes.bool.isRequired,
	updateLoaded: React.PropTypes.func.isRequired,
	id: React.PropTypes.number.isRequired,
	top: React.PropTypes.number.isRequired,
	left: React.PropTypes.number.isRequired,
	colid: React.PropTypes.number.isRequired,
	loadedItemsCnt: React.PropTypes.number.isRequired,
	item: React.PropTypes.object.isRequired,
};


export {PinterestItem};
