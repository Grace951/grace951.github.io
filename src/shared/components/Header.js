if (process.env.BROWSER) {
	require ('./header.sass');
}

import { Link} from 'react-router';
import React from 'react';
import { connect } from 'react-redux';
import * as modalActions from '../actions/modalAction';

let Header = class Header extends React.Component{
	constructor(props) {
		super(props);
		this.state = {
			showSmallMenu: false
		}
		this.toggleSmallMenu = this.toggleSmallMenu.bind(this);
	}
	toggleSmallMenu(){
		this.setState({showSmallMenu: !this.state.showSmallMenu});
	}
	render() {
		let Baselink = "https://hopeshelter.herokuapp.com";
		// let link = Baselink;
		// this.props.location.pathname && (link = Baselink + this.props.location.pathname);
		// console.log(link, this.props.location.pathname);		
		let sMenuStyle ={
			transform: this.state.showSmallMenu?"translateY(0)":"translateY(-130%)"
		}
		return (
			<header id="grace_header_h">
				<div id="grace_header_bg"><h1 style={{display:"none"}}>希望園地設計|Portfolio|作品集|平面設計|網頁設計</h1> </div>
					<div >
						<div className="inner relative">
							<div id="menu-toggle_grace" className="button dark" onClick={this.toggleSmallMenu}>
								<i className="fa fa-bars" aria-hidden="true" />
							</div>
							<div id="navigation_grace">
								<Link to="/home" className="logo" ><img src="/images/logo.png" alt="hope shelter design web"/></Link>
								<ul id="main-menu_grace">
									<li className="current-menu-item"><Link to="/home">Home</Link></li>
									<li><Link to="/aboutme">About Me</Link></li>
									<li className="parent">
										<Link to="/portfolio/f2e">Portfolio</Link>
										<ul className="sub-menu_grace">
											<li><Link to="/portfolio/f2e"> Front-end App</Link></li>
											<li><Link to="/portfolio/graphic">Graphic Design</Link></li>
											<li><Link to="/portfolio/editoral">Editorial</Link></li>
										</ul>
									</li>
								</ul>
						</div>

						<div id="logo_small" className="logo_small">
							<Link to="/home"> <img src="/images/ico.png"/></Link>
						</div>
						<div id="navigation_grace_small">
							<ul id="main-menu_grace_small"  style={sMenuStyle}>
								<li className="current-menu-item"><Link to="/home">Home</Link></li>
								<li><Link to="/aboutme">About me</Link></li>
								<li className="parent">
									<Link to="/portfolio/f2e">Portfolio</Link>
									<ul className="sub-menu_grace_small">
										<li><Link to="/portfolio/f2e">Front-end App</Link></li>
										<li><Link to="/portfolio/graphic">Graphic Design</Link></li>
										<li><Link to="/portfolio/editoral">Editorial</Link></li>
									</ul>
								</li>
							</ul>
						</div>
						<div className="clear"/>
					</div>
				</div>
			</header>
		);
	}
};

Header.propTypes = {
  showXsNav: React.PropTypes.bool.isRequired,
  changeXsNavModal: React.PropTypes.func.isRequired
};

function mapStateToProps(state) {
  return { 
	showXsNav: state.modal.showXsNav,	
  };
}	

Header = connect(mapStateToProps, { ...modalActions})(Header);
export {Header};
