if (process.env.BROWSER) {
	require ('./pinterestGrid.sass');
}
import React from 'react';
import { PinterestItem } from './PinterestItem';

let PinterestGrid = class PinterestGrid extends React.Component{
	constructor(props) {
		super(props);
		this.loadProps = this.loadProps.bind(this);
		this.updatePosition = this.updatePosition.bind(this);
		this.state = this.loadProps(props);
	}
	componentWillReceiveProps(nextProps){
		if (this.props.items !== nextProps.items){
			this.setState(
				this.loadProps(nextProps)
			);
			window.scrollTo(0, 0);
		}
	}	
	componentWillMount() {
	}
	
	componentDidMount() {
		window.addEventListener('scroll', this.updatePosition, false);
		window.addEventListener('resize', this.updatePosition, false);
		window.scrollTo(0, 0);
		this.props.updateHeight(this.state.height + this.props.gutter);
		this.updatePosition(true);
	}

	componentWillUnmount() {
		window.removeEventListener('scroll', this.updatePosition);
		window.removeEventListener('resize', this.updatePosition);
	}
	componentDidUpdate(prevProps, prevState) {
		if (this.state.height != prevState.height)
			this.props.updateHeight(this.state.height + this.props.gutter);
	}
	loadProps(props){		
		const { columnWidth, gutter, items, hideDesc } = props;		
		let state ={};
		let loadedItems = Array.from({ length: items.length }, () => ({loaded:false, top: 0, left: 0, ssr:false}))
			, columns = props.columns
			, columnHeights
			, height = 0
			, viewport = {
				top: 0,
				height: 0
			};

		let shortestColumnIndex, loadedIndex = 0;
		props.device && (props.device.phone || props.device.mobile) && (columns = 1);
		props.device && (props.device.tablet) && (columns = 2);

		columnHeights = Array.from({ length:  columns}, () => 0)
		for (let i=0; i<items.length; i++){
			let item = loadedItems[i];
			item.height = items[i].img_height;	
			if(i < columns * 2){
				shortestColumnIndex = columnHeights.indexOf(Math.min(...columnHeights));			
				item.ssr = true;
				item.top = columnHeights[shortestColumnIndex];
				item.left = ( columnWidth + gutter ) * shortestColumnIndex;	
				item.loaded = true;
				height = columnHeights[shortestColumnIndex] += (items[i].img_height + this.props.gutter + (hideDesc?30:0));
				loadedIndex++;	
			}
		}
		
		state={
			viewport,
			height,
			columns,
			columnHeights,
			loadedItems, 
			loading: true,
			loadedIndex
		};
		return state;
	}
	updatePosition (first) {
		const { columnWidth, gutter, items, delay, container, hideDesc } = this.props;
		let { loadedItems, columns, columnHeights, loadedIndex} = this.state;
		let shortestColumnIndex;
		let colHeights = [...columnHeights];
		let newLoadedItems = [...loadedItems];
		let containerWidth = 1600; 
		if (process.env.BROWSER) {
			containerWidth = document.getElementById(container).clientWidth;
		}
		let newColumns = Math.floor(containerWidth / (columnWidth + gutter));
		let viewport = {
					top: window.pageYOffset,
					height: window.innerHeight
				};
		if (newColumns !== this.state.columns ){
			loadedIndex = 0;
			colHeights = Array.from({ length:  newColumns}, () => 0);
			newLoadedItems = Array.from({ length: items.length }, (v, i) => ({loaded:false, top: 0, left: 0, ssr:loadedItems[i].ssr}));
		}
		shortestColumnIndex = colHeights.indexOf(Math.min(...colHeights));	
		if (newColumns === this.state.columns && viewport.height + viewport.top < colHeights[shortestColumnIndex] + delay)
			return; 


		for (let i=0; i<items.length; i++){	
			let item = newLoadedItems[i];
			if(item.loaded){
				continue;
			}
			shortestColumnIndex = colHeights.indexOf(Math.min(...colHeights));			
			item.top = colHeights[shortestColumnIndex];	
			item.left = ( columnWidth + gutter ) * shortestColumnIndex;		

			if (viewport.height + viewport.top > colHeights[shortestColumnIndex] + delay ){
				// console.log(i, item, newColumns, colHeights, shortestColumnIndex);			
				item.loaded = true;
				colHeights[shortestColumnIndex] += (items[i].img_height + this.props.gutter + (hideDesc?30:0));
				loadedIndex++;	
			}else{
				break;
			}

		}

		if (first || newColumns !== this.state.columns ){
			this.setState({
				viewport,
				columns: newColumns,
				columnHeights : colHeights,
				loadedItems: newLoadedItems,
				loadedIndex,
			});			
		}
		// console.log(loadedIndex, newColumns, newLoadedItems, colHeights);
		this.props.updateHeight(Math.max(...colHeights) + gutter);
	}
	
	render() {
		const { columnWidth, gutter, items, hideDesc } = this.props;
		let { loadedItems,  loadedIndex, columns} = this.state;
		let style = {
			width: (columnWidth + gutter) * columns,			
		};

		let ItemViews = loadedItems.slice(0, loadedIndex ).map((item,id) => {
			return (<PinterestItem key={id} item={items[id]} reRender={!item.loaded} id={id} top={item.top} left={item.left} ssr={item.ssr} 
							hideDesc={hideDesc} columnWidth={columnWidth}/>);
		});

		return (
			<div className="pinterest-grid gp-grid" style={style}>
				{ItemViews}
			</div>
		);
	}
};

PinterestGrid.propTypes = {
	items: React.PropTypes.array.isRequired,
	columns: React.PropTypes.number,
	hideDesc: React.PropTypes.bool,
	columnWidth: React.PropTypes.number.isRequired,
	gutter: React.PropTypes.number.isRequired,	
	updateHeight: React.PropTypes.func.isRequired,	
	delay: React.PropTypes.number.isRequired,	
	device:  React.PropTypes.object	,
	container:  React.PropTypes.string.isRequired,
};

PinterestItem.defaultProps = {
	hideDesc: false,
    columns: 5,
    columnWidth: 280,
    gutter: 15,
	delay: 300
};

export {PinterestGrid};
