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
			columnHeights : Array.from({ length: props.columns }, () => 0),
			loadedItem: Array.from({ length: props.items.length }, () => false), 
			done: false
		};
		this.updateViewport = this.updateViewport.bind(this);
		this.updateLoaded = this.updateLoaded.bind(this);
		this.getShortestColumn = this.getShortestColumn.bind(this);
		this.getLongestLength = this.getLongestLength.bind(this);
	}
	componentDidMount() {
		window.addEventListener('scroll', this.updateViewport, false);
		window.addEventListener('resize', this.updateViewport, false);
		this.updateViewport();
	}

	componentWillUnmount() {
		window.removeEventListener('scroll', this.updateViewport);
		window.removeEventListener('resize', this.updateViewport);
	}

	updateViewport () {
		// TODO: debounce this call
		this.setState({
			viewport: {
				top: window.pageYOffset,
				height: window.innerHeight
			}
		});
	}
    getShortestColumn() {
        const minValue = Math.min(...this.state.columnHeights);
        return this.state.columnHeights.indexOf(minValue);
    }
    getLongestLength() {
        return Math.max(...this.state.columnHeights);
    }
    updateLoaded(id, done, colid, height) {
		let l = [...this.state.loadedItem];
		if (l[id] === done)	return;
		l[id] = done;
		let h = [...this.state.columnHeights];
		h[colid] += height + this.props.gutter ;
		this.setState({
			loadedItem: l,
			done: (l.filter((i)=>!i).length <= 0),
			columnHeights: h
		});
		this.props.updateHeight(this.getLongestLength());
    }	
	render() {
		let {loadedItem} = this.state;
		let loadedItemsCnt = loadedItem.filter((i)=>i).length;

        const { columnWidth, gutter } = this.props;
        const shortestColumnIndex = this.getShortestColumn();
        const left = ( columnWidth + gutter ) * shortestColumnIndex;
        const top = this.state.columnHeights[shortestColumnIndex];

		let ItemViews = this.props.items.slice(0, loadedItemsCnt + 1).map((item,id) => {
			return (<PinterestItem key={id} item={item} viewport={this.state.viewport}
						id={id} updateLoaded={this.updateLoaded} loadedItemsCnt={loadedItemsCnt} top={top} left={left} colid={shortestColumnIndex}/>);
		});

		return (
			<div className="pinterest-grid">
				{ItemViews}
			</div>
		);
	}
};

PinterestGrid.propTypes = {
	items: React.PropTypes.array.isRequired,
	columns: React.PropTypes.number.isRequired,
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
