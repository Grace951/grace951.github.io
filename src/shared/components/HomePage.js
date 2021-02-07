import './home.sass';
import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';

import { getDevice } from '../actions/deviceAction';
import { loadRecentsWorks } from '../actions/portfolioActions';
import {PinterestGrid} from './PinterestGrid/PinterestGrid';

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
		let{loadRecentsWorks} = this.props;
		loadRecentsWorks();
	}	
    updateHeight( height ) {
		this.setState({
			height
		});	
    }
	render() {
		let {recents} = this.props;
		let style = {height: this.state.height , width:"100%"};	
		return (
			<div id="home" >				
				<div id="containerb"  style={style}>
					<PinterestGrid items={recents ||[]} columnWidth={280} gutter={20} columns={5} container="containerb" updateHeight={this.updateHeight}
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
    device: state.device,
    recents: state.recents
  };
}

HomePage.serverFetch =  [ getDevice, loadRecentsWorks ];
HomePage = connect(mapStateToProps, {loadRecentsWorks})(HomePage);
export default HomePage;
