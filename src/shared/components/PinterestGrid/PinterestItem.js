if (process.env.BROWSER) {
	require ('./pinterestItem.sass');
}
import React from 'react';
import { PinterestImg } from './PinterestImg';
let PinterestItem = class PinterestItem extends React.Component{
	constructor(props) {
		super(props);
		this.state = {
			loadedImg: Array.from({ length: props.item.images.length }, () => ( {loaded: false, height: 0})), 			
			done: false,
		}
		this.updateLoaded = this.updateLoaded.bind(this);
	}
	componentWillReceiveProps(nextProps){
	}
	componentDidMount() {
	}
	componentWillMount() {
	}
	componentDidUpdate(prevProps, prevState) {
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
			// console.log(l.reduce((acc, val)=>(acc + val.height),0));
			// use this to get total hight!!!!!!!!!!!!!!!!!!!!!!!!
		}		
    }
	render() {
		let {item, top, left, ssr, hideDesc, columnWidth} = this.props;
		let style = {top: top , left, width: `${columnWidth}px` };
		return (
			<div className={`pinterest-item ${hideDesc?'hide-response':''}`}  style={style}  >
				<div >
				{
					item.images.map((image,id) => (
						<PinterestImg src={image} key={id} id={id}  ssr={ssr} /*updateLoaded={this.updateLoaded}*/ />
					))
				}
				</div>
				<div className={`pinterest-item-desc ${hideDesc?'hide-response':''}`}  ref={(el) => { this.ItemDesc = el; }} >	
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
	top: React.PropTypes.number.isRequired,
	left: React.PropTypes.number.isRequired,
	item: React.PropTypes.object.isRequired,
	ssr: React.PropTypes.bool.isRequired,	
	hideDesc: React.PropTypes.bool.isRequired,	
};


export {PinterestItem};
