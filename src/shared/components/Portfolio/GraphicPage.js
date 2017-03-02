if (process.env.BROWSER) {
	require ('./gp.sass');
}
import React from 'react';
import { connect } from 'react-redux';
import {PinterestGrid} from '../PinterestGrid/PinterestGrid';
import items from '../../data/graphicDesign';

function uniqArray(arrArg){
	return arrArg.filter((elem, pos, arr) => arr.indexOf(elem) == pos);
}
let categories = uniqArray(items.map((item, index) => (item.category)));

let GraphicPage = class GraphicPage extends React.Component{
	constructor(props) {
		super(props);	
	
		this.state = {
			height: "100vh",
			items: items,
			chooseItem: -1,
			minCategory: (props.device.phone || props.device.mobile),
			userOpenCategory: false
		};
		this.updateHeight = this.updateHeight.bind(this);
		this.chooseCategory = this.chooseCategory.bind(this);
		this.userOpenCategory = this.userOpenCategory.bind(this);
		this.handleCategory = this.handleCategory.bind(this);
    }
	componentWillReceiveProps(nextProps) {
		let isMobile = (nextProps.device.phone || nextProps.device.mobile);
		if (this.state.minCategory != isMobile){
			this.setState({minCategory: isMobile});
		}
	}
	
	componentDidMount() {
		window.addEventListener('resize', this.handleCategory, false);
	}
	componentWillUnmount() {
		window.removeEventListener('resize', this.handleCategory);
	}
	handleCategory(){
		let {device} = this.props;
		this.setState( { 
			minCategory: window.outerWidth < 991 || (device.phone || device.mobile),
			userOpenCategory: !(window.outerWidth < 991)
		});
	}
	userOpenCategory(e){
		this.setState( { userOpenCategory: !this.state.userOpenCategory});
	}
    updateHeight( height ) {
		this.setState({
			height
		});	
    }
	chooseCategory(e){
		let {userOpenCategory, minCategory} = this.state;
		minCategory && (userOpenCategory = !userOpenCategory);
		let id = parseInt(e.target.getAttribute("data-id"));
		let select = id===-1?"All":categories[id];
		let newItems = items.filter((item) => ( select === "All" || select === "all" || item.category===select));
		this.setState({
			items:newItems,
			userOpenCategory,
			chooseItem: id
		});
	}
	render() {
		let {minCategory, items, height, userOpenCategory, chooseItem} = this.state;
		let style = {
			height , 
			width:"100%",
			paddingTop: minCategory?"40px":"0"
		};
		let categoryClass = minCategory?userOpenCategory?"user-open":"user-close":"ori-open";
		let Category = minCategory?chooseItem===-1?"All":categories[chooseItem]:"Category";
		
		return (
	<section id="graphicdesign-section">
        <div className="container">
              <div className="row">
				<ul className={`galereya-cats ${categoryClass}`}>
					<li className="galereya-cats-item"  onClick={this.userOpenCategory} >{Category}</li>
					<li className={`galereya-cats-item ${chooseItem===-1?'active':''}`} data-id="-1" onClick={this.chooseCategory} >All</li>
					{categories.map((item, id)=>(<li key={id} data-id={id} onClick={this.chooseCategory} className={`galereya-cats-item ${chooseItem===id?'active':''}`}>{item}</li>))}
				</ul>
              </div>
              <div className="row">
               <div className="col-lg-offset-2 col-lg-10 col-md-offset-3 col-md-9 col-sm-offset-2 col-sm-10" style={{padding: 0}}>
                 <div id="graphic-design"  style={style}>
					<PinterestGrid items={items} columnWidth={300} gutter={15} columns={3} container="graphic-design" 
						updateHeight={this.updateHeight} delay={100} device={this.props.device} hideDesc={true}/>					
				</div>
              </div>
            </div>
        </div>
    </section>
		);
	}
};



GraphicPage.propTypes = {
	device:  React.PropTypes.object.isRequired
};

function mapStateToProps(state, ownProps) {
  return {
    device: state.device
  };
}

GraphicPage = connect(mapStateToProps)(GraphicPage);

export default GraphicPage;
