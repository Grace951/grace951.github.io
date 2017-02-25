if (process.env.BROWSER) {
	require ('./pinterestGrid.sass');
}
import React from 'react';
import { PinterestItem } from './PinterestItem';

let PinterestGrid = class PinterestGrid extends React.Component{
	constructor(props) {
		super(props);
		const { columnWidth, gutter, items,  } = props;
		let loadedItems = Array.from({ length: items.length }, () => ({loaded:false, top: 0, left: 0, height:0}))
			, columns = props.columns
			, columnHeights = Array.from({ length:  columns}, () => 0)
			, viewport = {
				top: 0,
				height: 0
			};

		for (let i=0; i<items.length; i++){
			loadedItems[i].height = items[i].img_height;	
		}

		this.state={
			viewport,
			columns,
			columnHeights,
			loadedItems, 
			loading: true,
			loadedIndex : 0
		};
		this.updatePosition = this.updatePosition.bind(this);
	}
	componentDidMount() {
		window.addEventListener('scroll', this.updatePosition, false);
		window.addEventListener('resize', this.updatePosition, false);
		this.updatePosition(true);
	}

	componentWillUnmount() {
		window.removeEventListener('scroll', this.updatePosition);
		window.removeEventListener('resize', this.updatePosition);
	}
	componentDidUpdate(prevProps, prevState) {
	}	
	updatePosition (first) {
		const { columnWidth, gutter, items, delay } = this.props;
		let { loadedItems, columns, columnHeights, loadedIndex} = this.state;
		let top, left, shortestColumnIndex;
		let colHeights = [...columnHeights];
		let newLoadedItems = [...loadedItems];
		let containerWidth = 1600; 
		if (process.env.BROWSER) {
			containerWidth = document.getElementById("containerb").clientWidth;
		}
		let newColumns = Math.floor(containerWidth / (columnWidth + gutter));
		let viewport = {
					top: window.pageYOffset,
					height: window.innerHeight
				};
		shortestColumnIndex = colHeights.indexOf(Math.min(...colHeights));	
		if (newColumns !== this.state.columns ){
			loadedIndex = 0;
			colHeights = Array.from({ length:  newColumns}, () => 0);
		}
		if (newColumns === this.state.columns && viewport.height + viewport.top < colHeights[shortestColumnIndex] + delay)
			return; 


		for (let i=0; i<items.length; i++){
			if (newColumns !== this.state.columns ){
				newLoadedItems[i] = {loaded:false, top: 0, left: 0, height:items[i].img_height};
			}			
			let item = newLoadedItems[i];
			if(item.loaded){
				continue;
			}
			shortestColumnIndex = colHeights.indexOf(Math.min(...colHeights));			
			item.top = colHeights[shortestColumnIndex];	
			item.left = ( columnWidth + gutter ) * shortestColumnIndex;		

			if (viewport.height + viewport.top > colHeights[shortestColumnIndex] + delay ){
				item.loaded = true;
				colHeights[shortestColumnIndex] += items[i].img_height + this.props.gutter ;				
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
		this.props.updateHeight(Math.max(...colHeights) + gutter);
	}
	
	render() {
		const { columnWidth, gutter, items } = this.props;
		let { loadedItems,  loadedIndex, columns} = this.state;
		let style = {width: (columnWidth + gutter) * columns};

		let ItemViews = loadedItems.slice(0, loadedIndex ).map((item,id) => {
			return (<PinterestItem key={id} item={items[id]} reRender={!item.loaded} id={id} top={item.top} left={item.left} />);
		});

		return (
			<div className="pinterest-grid" style={style}>
				{ItemViews}
			</div>
		);
	}
};

PinterestGrid.propTypes = {
	items: React.PropTypes.array.isRequired,
	columns: React.PropTypes.number,
	columnWidth: React.PropTypes.number.isRequired,
	gutter: React.PropTypes.number.isRequired,	
	updateHeight: React.PropTypes.func.isRequired,	
	delay: React.PropTypes.number.isRequired,	
};

PinterestItem.defaultProps = {
	showImage: false,
    columns: 5,
    columnWidth: 280,
    gutter: 15,
	delay: 300
};

export {PinterestGrid};
