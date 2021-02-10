import './pinterestGrid.sass';
import PropTypes from 'prop-types';
import React from 'react';
import update from 'immutability-helper';
import { PinterestItem } from './PinterestItem';
import { Link } from 'react-router-dom';

let PinterestGrid = class PinterestGrid extends React.Component{
	constructor(props) {
		super(props);
		this.loadProps = this.loadProps.bind(this);
		this.updatePosition = this.updatePosition.bind(this);
		this.updatePositionWrap = this.updatePositionWrap.bind(this);
		this.st = {...this.state = this.loadProps(props)};
	}

	componentDidMount() {
		window.addEventListener('scroll', this.updatePositionWrap, false);
		window.addEventListener('resize', this.updatePositionWrap, false);
		window.scrollTo(0, 0);
		this.props.updateHeight(this.state.height + this.props.gutter);
		let st = this.loadProps(this.props);
		this.st = this.updatePosition(true, st);
		this.setState(this.st);
	}

	componentWillUnmount() {
		window.removeEventListener('scroll', this.updatePositionWrap);
		window.removeEventListener('resize', this.updatePositionWrap);
	}
	componentDidUpdate(prevProps, prevState) {

		if (JSON.stringify(this.props.items) !== JSON.stringify(prevProps.items)){
			let st = this.loadProps(this.props);
			this.st = this.updatePosition(true, st);
			this.setState(this.st);
		}
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
		let ww = 1600;
		if (process.env.BROWSER) {
			ww = window.innerWidth;
		}
		columns = Math.floor(ww / ( columnWidth + gutter ));

		let shortestColumnIndex, loadedIndex = 0;
		props.device && (props.device.phone || props.device.mobile) && (columns = 1);
		props.device && (props.device.tablet) && (columns = 2);

		columnHeights = Array.from({ length:  columns}, () => 0);
		for (let i=0; i<items.length; i++){
			let item = loadedItems[i];
			item.height = items[i].img_height;	
			if(i < columns ){
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
	updatePositionWrap (e) {
		this.st = this.updatePosition(true, this.st);
		this.setState(this.st);
	}
	updatePosition (first, st = this.st) {
		const { columnWidth, gutter, items, delay, container, hideDesc } = this.props;
		let { loadedItems, columns, columnHeights, loadedIndex} = st;
		let shortestColumnIndex;
		let colHeights = [...columnHeights];
		let newLoadedItems = [...loadedItems];
		let containerWidth = 1600;
		if (process.env.BROWSER) {
			containerWidth = document.getElementById(container).clientWidth;
		}
		let newColumns = (Math.floor(containerWidth / (columnWidth + gutter))) || 1;
		let viewport = {
			top: window.pageYOffset,
			height: window.innerHeight
		};
		if (newColumns !== columns || containerWidth < ((columnWidth + gutter)*columns)){
			loadedIndex = 0;
			colHeights = Array.from({ length:  newColumns}, () => 0);
			newLoadedItems = Array.from({ length: items.length }, (v, i) => ({loaded:false, top: 0, left: 0, ssr:loadedItems[i].ssr}));
		}
		shortestColumnIndex = colHeights.indexOf(Math.min(...colHeights));	
		if (newColumns === columns && viewport.height + viewport.top < colHeights[shortestColumnIndex] + delay){
			return st; 
		}

		if (process.env.BROWSER) {
			let cont = document.getElementById("pinterest-grid-container");
			if(cont){
				cont.style.width = ((parseInt(columnWidth) + parseInt(gutter)) * parseInt(newColumns) - gutter) + "px";
			}
		}
		for (let i=0; i<items.length; i++){	
			let item = newLoadedItems[i];
			if(!item || item.loaded){
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
		if (first || newColumns !== columns ){
			st = update(st, {$merge: {viewport, columns: newColumns, columnHeights: colHeights, loadedItems:newLoadedItems, loadedIndex}});
		}
		// console.log(loadedIndex, newColumns, newLoadedItems, colHeights);
		this.props.updateHeight(Math.max(...colHeights) + gutter);
		return st;
	}
	
	render() {
		const { columnWidth, gutter, items, hideDesc } = this.props;
		let { loadedItems,  loadedIndex, columns} = this.state;

		let ItemViews = loadedItems.slice(0, loadedIndex ).map((item,id) => {
			if(id >= items.length){
				return;
			}
			if(items[id].index < 0){
				return (
					<PinterestItem key={id} item={items[id]} reRender={!item.loaded} id={id} top={item.top} left={item.left} ssr={item.ssr} 
							hideDesc={hideDesc} columnWidth={columnWidth}/>
				);
			}
			return (
				<Link  key={id} to={`/portfolio/${items[id].index}`}>
					<PinterestItem item={items[id]} reRender={item && !item.loaded} id={id} top={item.top} left={item.left} ssr={item.ssr} 
							hideDesc={hideDesc} columnWidth={columnWidth}/>
				</Link>
			);
		});

		return (
			<div className="pinterest-grid gp-grid" id="pinterest-grid-container">
				{ItemViews}
			</div>
		);
	}
};

PinterestGrid.propTypes = {
	items: PropTypes.array.isRequired,
	columns: PropTypes.number,
	hideDesc: PropTypes.bool,
	columnWidth: PropTypes.number.isRequired,
	gutter: PropTypes.number.isRequired,	
	updateHeight: PropTypes.func.isRequired,	
	delay: PropTypes.number.isRequired,	
	device:  PropTypes.object	,
	container:  PropTypes.string.isRequired,
};

PinterestItem.defaultProps = {
	hideDesc: false,
    columns: 5,
    columnWidth: 280,
    gutter: 15,
	delay: 300
};

export {PinterestGrid};
