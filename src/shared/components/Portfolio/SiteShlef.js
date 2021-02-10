import PropTypes from 'prop-types';
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
		let {web_link, web_logo, brief, techs, source_code, video} = this.props;
		let web_snap_style = {display: this.state.showSnap?"block":"none"};
		let web_snap_img_style = {opacity: this.state.showSnap?"1":"0"};
		let web_snap_btn_style = 
			{
				position: this.state.showSnap?"fixed":"relative",
				top: this.state.showSnap?"160px":0,
				right: this.state.showSnap?"150px":0,
			};
	return(
		<div className="row">
			<div className="siteshelf col-sm-12  col-xs-12">
				<div className="row web_brief">
					<div className="row ">
						<div className="web_link col-sm-12"><a href={web_link.src} target="_blank"><img src={web_link.img} alt={this.props.children}  title={this.props.children}/></a>
							<h1 className={"web_title " + web_link.className}>{web_link.title}</h1>
							<h2><a href={web_link.src} target="_blank"> Go </a></h2>
						</div>
					</div>
					<div className="row">
						<div className="web_desc col-sm-6 col-xs-12">
							{brief}
							{source_code && <p className="source_code" style={{fontWeight: "normal", fontSize:"16px"}}>
								Source code: <a target="_blank" href={source_code}>{source_code}</a>
							</p>}
							{video && !this.state.showSnap && <div className="view_snap shake hidden-xs" style={web_snap_btn_style} onClick={this.view_snap}> {this.state.showSnap?"Hide video":"View video"}</div> }
						</div>
						<div className="tech_logo col-sm-6 col-xs-12">
							<p className="">
							使用技術:
									<br/> {techs}
							</p>
							<ul className="web_logo">
								{web_logo.map((item , id)=>(<li key={id}> <a href={item.link}  target="_blank"> <img className="webtech-logo" src={item.img}/> </a> </li>))}
							</ul>
						</div>
					</div>
					{
						video && 
						<div className="row web_snap hidden-xs" style={web_snap_style}>
							<video width="100%" controls autoPlay muted >
								<source src={video} type="video/mp4" />
								Your browser does not support the video tag.
							</video>
						</div> 
					}
				</div>
			</div>
		</div>
		);
	}
};


SiteShlef.propTypes = {
    children: PropTypes.oneOfType([
      PropTypes.arrayOf(PropTypes.node),
      PropTypes.node
    ]),
	web_link: PropTypes.object.isRequired,
	techs: PropTypes.string.isRequired,
	web_logo: PropTypes.array.isRequired,
	web_snap: PropTypes.array.isRequired,
};

export default SiteShlef;
