if (process.env.BROWSER) {
	require ('./pinterestGrid.sass');
}
import React from 'react';
import { PinterestItem } from './PinterestItem';

let PinterestGrid = class PinterestGrid extends React.Component{
	constructor(props) {
		super(props);
		this.state={
			viewport: {
				top: 0,
				height: 0
			},
			renderState: 0,   //0:not render, 1:rerender
			columns: props.columns,
			columnHeights : Array.from({ length:  props.columns}, () => 0),
			loadedItem: Array.from({ length: props.items.length }, () => false), 
			itemHeight: Array.from({ length: this.props.items.length }, () => 0), 
			done: false
		};
		this.updateViewport = this.updateViewport.bind(this);
		this.updateLoaded = this.updateLoaded.bind(this);
		this.getShortestColumn = this.getShortestColumn.bind(this);
		this.getLongestLength = this.getLongestLength.bind(this);
		this.updatePosition = this.updatePosition.bind(this);
	}
	componentDidMount() {
		// window.addEventListener('scroll', this.updateViewport, false);
		window.addEventListener('resize', this.updatePosition, false);
		// this.updatePosition();
	}

	componentWillUnmount() {
		// window.removeEventListener('scroll', this.updateViewport);
		window.removeEventListener('resize', this.updatePosition);
	}
	componentDidUpdate(prevProps, prevState) {
	}	
	updateViewport () {
		// this.setState({
		// 	viewport: {
		// 		top: window.pageYOffset,
		// 		height: window.innerHeight
		// 	},
		// });
	}
	updatePosition () {
		let {columnWidth, gutter} = this.props;
		let containerWidth = 1600; 
		if (process.env.BROWSER) {
			containerWidth = document.getElementById("containerb").clientWidth;
		}
		let columns = Math.floor(containerWidth / (columnWidth + gutter));

		if (columns !== this.state.columns ){
			this.setState({
				// viewport: {
				// 	top: window.pageYOffset,
				// 	height: window.innerHeight
				// },
				columns,
				columnHeights : Array.from({ length: columns }, () => 0),
				loadedItem: Array.from({ length: this.props.items.length }, () => false), 				
				done: false
			});
		}
	}
    getShortestColumn() {
        const minValue = Math.min(...this.state.columnHeights);
        return this.state.columnHeights.indexOf(minValue);
    }
    getLongestLength() {
        return Math.max(...this.state.columnHeights);
    }
    updateLoaded(id, done, colid, height) {
		let loadedItem = [...this.state.loadedItem];
		if (loadedItem[id] === done)	return;

		loadedItem[id] = done;

		let columnHeights = [...this.state.columnHeights];
		columnHeights[colid] += height + this.props.gutter ;
		let finishRender = (loadedItem.filter((i)=>!i).length <= 0);
		this.setState({
			loadedItem,
			done: finishRender,
			columnHeights,
		});
		this.props.updateHeight(this.getLongestLength());		
    }	
	render() {
		const { columnWidth, gutter } = this.props;
		let {reRender,itemHeight,loadedItem,columns} = this.state;
		let loadedItemsCnt = loadedItem.filter((i)=>i).length;
		let top,left,shortestColumnIndex;
		let colHeights = [...this.state.columnHeights];
		let style = {width: (columnWidth + gutter) * columns};
		
		shortestColumnIndex = this.getShortestColumn();
		top = this.state.columnHeights[shortestColumnIndex];
		left = ( columnWidth + gutter ) * shortestColumnIndex;
		// console.log(top, left, loadedItem, colHeights, shortestColumnIndex, loadedItemsCnt);

		let ItemViews = this.props.items.slice(0, loadedItemsCnt + 1).map((item,id) => {
			return (<PinterestItem key={id} item={item} viewport={this.state.viewport} reRender={!loadedItem[id]} 
						id={id} updateLoaded={this.updateLoaded} loadedItemsCnt={loadedItemsCnt} top={top} left={left} colid={shortestColumnIndex}/>);
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
};

PinterestItem.defaultProps = {
	showImage: false,
    columns: 5,
    columnWidth: 280,
    gutter: 15	
};

export {PinterestGrid};
