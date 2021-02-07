import './home.sass';
import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';

import { getDevice } from '../actions/deviceAction';
import connectDataFetchers from '../lib/connectDataFetchers.jsx';
import {PinterestGrid} from './PinterestGrid/PinterestGrid';
import items from '../data/recentWorks';


let LoadingDiv = class LoadingDiv extends React.Component{
	constructor(props) {
		super(props);	
    }
	render() {		
		return (
			<div className="loading-wrap"><img src="//images/Preloader_8.gif" alt="" /></div>
		);
	}
};

LoadingDiv.propTypes = {
};


let HomePage = class HomePage extends React.Component{
	constructor(props) {
		super(props);	
	
		this.state = {
			height: "100vh"
		};
		this.updateHeight = this.updateHeight.bind(this);
    }
	componentDidMount() {
	}	
    updateHeight( height ) {
		this.setState({
			height
		});	
    }
	render() {
		let style = {height: this.state.height , width:"100%"};	
		return (
			<div id="home" >				
				<div id="containerb"  style={style}>
					<PinterestGrid items={items} columnWidth={280} gutter={20} columns={5} container="containerb" updateHeight={this.updateHeight}
						delay={100} device={this.props.device} hideDesc={false}/>					
				</div>
			</div>
		);
	}
};

HomePage.propTypes = {
	device:  PropTypes.object.isRequired
};

function mapStateToProps(state, ownProps) {
  return {
    device: state.device
  };
}

HomePage = connect(mapStateToProps)(
    connectDataFetchers(HomePage, [ getDevice ])
);


export default HomePage;
