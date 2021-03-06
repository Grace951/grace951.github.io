import './pinterestItem.sass';
import update from 'immutability-helper';
import PropTypes from 'prop-types';
import React from 'react';
import { PinterestImg } from './PinterestImg';
let PinterestItem = class PinterestItem extends React.Component{
	constructor(props) {
		super(props);
		this.state = {
			loadedImg: Array.from({ length: props.item.images.length }, () => ( {loaded: false, height: 0})), 			
			done: false,
		}
		this.loadedImgDirty = Array.from({ length: props.item.images.length }, () => ( {loaded: false, height: 0})), 		
		this.updateLoaded = this.updateLoaded.bind(this);
	}
	componentDidUpdate(prevProps, prevState) {
		if (JSON.stringify(prevProps.item) === JSON.stringify(this.props.item))
			return;
		this.setState({
			loadedImg: Array.from({ length: prevProps.item.images.length }, () => ( {loaded: false, height: 0})), 						
			done: false,
		});
	}
    updateLoaded(id, done, height ) {
		// Do not get source from this.state.loadedImg, because loadedImg may not update( due to setState() will not update sync )
		let newLoad = {loaded: !!done, height};
		this.loadedImgDirty[id] = newLoad;
		let l = this.loadedImgDirty;
		l[id] = newLoad;
		let d = (l.filter((i)=>!i.loaded).length <= 0);
		const newState  = update(this.state, {
			loadedImg : {[id]: {$set: newLoad}},
			done:  {$set: d}
		});
		this.setState(newState);
		if (d) {
			// let totoalHight = l.reduce((acc, val)=>(acc + val.height),0);
			// console.log(l.reduce((acc, val)=>(acc + val.height),0));
			// use this to get total hight!!!!!!!!!!!!!!!!!!!!!!!!
		}		
    }
	render() {
		let {item, top, left, ssr, hideDesc, columnWidth} = this.props;
		let {done} = this.state;
		let style = {top: top , left, width: `${columnWidth}px`};
		return (
			<div className={`pinterest-item ${hideDesc?'hide-response':''} ${done?'show-item':'hide-item'}`}  style={style}  >
				<div >
				{
					item.images.map((image,id) => (
						<PinterestImg src={image} key={id} id={id}  ssr={ssr} updateLoaded={this.updateLoaded} alt={`${item.title} - ${item.desc}`}/>
					))
				}
				</div>
				<div className={`pinterest-item-desc ${hideDesc?'hide-response':''}`} /* ref={(el) => { this.ItemDesc = el; }}*/ >	
					<div className="pinterest-item-desc-text">{item.note} </div>
					<div className="pinterest-item-desc-title">{item.title}</div>
				</div>
			</div>
		);
	}
}

PinterestItem.defaultProps = {
};
PinterestItem.propTypes = {
	top: PropTypes.number.isRequired,
	left: PropTypes.number.isRequired,
	columnWidth: PropTypes.number.isRequired,
	item: PropTypes.object.isRequired,
	ssr: PropTypes.bool.isRequired,	
	hideDesc: PropTypes.bool.isRequired,	
};


export {PinterestItem};
