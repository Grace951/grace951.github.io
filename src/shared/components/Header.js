import './header.sass';
import { NavLink} from 'react-router-dom';
import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import * as modalActions from '../actions/modalAction';


let Header = class Header extends React.Component{
	constructor(props) {
		super(props);
		this.toggleSmallMenu = this.toggleSmallMenu.bind(this);
		this.closeSmallMenu = this.closeSmallMenu.bind(this);
	}

	closeSmallMenu(){
		let{changeXsNavModal} = this.props;
		changeXsNavModal(false);
	}
	toggleSmallMenu(){
		let{changeXsNavModal, showXsNav} = this.props;
		changeXsNavModal(!showXsNav);
	}
	render() {
		let{showXsNav} = this.props;
		let Baselink = "https://hopeshelter.herokuapp.com";
		let link = Baselink;
		this.props.location.pathname && (link = Baselink + this.props.location.pathname);
		let sMenuStyle ={
			transform: showXsNav?"translateY(0)":"translateY(-130%)"
		}
		return (
			<header id="grace_header_h">
				<div id="grace_header_bg"><h1 style={{display:"none"}}>希望園地設計|Portfolio|作品集|平面設計|網頁設計</h1> </div>
					<div >
						<div className="inner relative">
							<div id="menu-toggle_grace" className="button dark" onClick={this.toggleSmallMenu}>
								<img src="/images/menu-24px.svg" alt=""/>
							</div>
							<div className="share">
							</div>
							<div id="navigation_grace">							
								<NavLink to="/home" className="logo" ><img src="/images/logo.png" alt="hope shelter design web"/></NavLink>
								<ul id="main-menu_grace">
									<li onClick={this.closeSmallMenu} className="current-menu-item"><NavLink to="/home" activeClassName="active" >Home</NavLink></li>
									<li onClick={this.closeSmallMenu}><NavLink to="/aboutme" activeClassName="active" >About Me</NavLink></li>
									<li className="parent"> 
										<NavLink to="/portfolio/f2e" activeClassName="active" >Portfolio</NavLink>
										<ul className="sub-menu_grace">
											<li onClick={this.closeSmallMenu}><NavLink to="/portfolio/f2e" > Front-end App</NavLink></li>
											<li onClick={this.closeSmallMenu}><NavLink to="/portfolio/graphic">Graphic Design</NavLink></li>
											<li onClick={this.closeSmallMenu}><NavLink to="/portfolio/editoral">Editorial</NavLink></li>
										</ul>
									</li>
								</ul>
						</div>

						<div id="logo_small" className="logo_small">
							<NavLink to="/home"> <img src="/images/ico.png"/></NavLink>
						</div>
						<div id="navigation_grace_small">
							<ul id="main-menu_grace_small"  style={sMenuStyle}>
								<li onClick={this.closeSmallMenu} className="current-menu-item"><NavLink to="/home">Home</NavLink></li>
								<li onClick={this.closeSmallMenu}><NavLink to="/aboutme">About me</NavLink></li>
								<li className="parent">
									<NavLink to="/portfolio/f2e">Portfolio</NavLink>
									<ul className="sub-menu_grace_small">
										<li onClick={this.closeSmallMenu}><NavLink to="/portfolio/f2e">Front-end App</NavLink></li>
										<li onClick={this.closeSmallMenu}><NavLink to="/portfolio/graphic">Graphic Design</NavLink></li>
										<li onClick={this.closeSmallMenu}><NavLink to="/portfolio/editoral">Editorial</NavLink></li>
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
  showXsNav: PropTypes.bool.isRequired,
  location: PropTypes.object.isRequired,
};

function mapStateToProps(state) {
  return { 
	showXsNav: state.modal.showXsNav,	
  };
}

Header = connect(mapStateToProps, { ...modalActions})(Header);
export default Header;
