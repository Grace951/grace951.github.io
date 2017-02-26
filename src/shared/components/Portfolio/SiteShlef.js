import React from 'react';

let SiteShlef = class SiteShlef extends React.Component{
	constructor(props) {
		super(props);
		this.state ={
			showSnap: false
		};
		this.view_snap = this.view_snap.bind(this);
	}
	view_snap(e){
		this.setState({showSnap: !this.state.showSnap});
	}
	render() {
		let web_snap_style = {display: this.state.showSnap?"block":"none"};
		let web_snap_img_style = {opacity: this.state.showSnap?"1":"0"};
		let web_snap_btn_style = 
			{
				position: this.state.showSnap?"fixed":"relative",
				top: this.state.showSnap?"160px":0,
				right: this.state.showSnap?"150px":0,
			};
	return(
	<div className="siteshelf col-sm-12">
		<div className="row web_brief">
			<div className="row ">
				<div className="web_link col-sm-12"><a href={this.props.web_link.src} target="_blank"><img src={this.props.web_link.img}/></a>
					{this.props.web_link.title}
					<h2><a href={this.props.web_link.src} target="_blank"> Go </a></h2>
				</div>
			</div>
			<div className="row">
				<div className="web_desc col-sm-6">
					{this.props.children}
					<div className="view_snap shake hidden-xs" style={web_snap_btn_style} onClick={this.view_snap}> {this.state.showSnap?"hide snap":"view snap"}</div>
				</div>
				<div className="tech_logo col-sm-6">
					<p className="">
					使用技術:
							<br/> {this.props.techs}
					</p>
					<ul className="web_logo">
						{this.props.web_logo.map((item , id)=>(<li key={id}> <a href={item.link}  target="_blank"> <img className="webtech-logo" src={item.img}/> </a> </li>))}
					</ul>
				</div>
			</div>
		</div>
		<div className="row web_snap hidden-xs" style={web_snap_style}>
			{this.state.showSnap && this.props.web_snap.map((item, id)=>(
				<div key={id} className="web_loading">
					<img className="calendar book img-responsive" src={item.img} style={web_snap_img_style}/>
				</div>
			))}
		</div>
	</div>
		);
	}
};


SiteShlef.propTypes = {
    children: React.PropTypes.oneOfType([
      React.PropTypes.arrayOf(React.PropTypes.node),
      React.PropTypes.node
    ]),
	web_link: React.PropTypes.object.isRequired,
	techs: React.PropTypes.string.isRequired,
	web_logo: React.PropTypes.array.isRequired,
	web_snap: React.PropTypes.array.isRequired,
};

export default SiteShlef;
