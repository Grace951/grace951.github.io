import './f2e.sass';
import React from 'react';
import SiteShlef from './SiteShlef';
import { connect } from 'react-redux';
import { loadF2eWorks } from '../../actions/portfolioActions';

let F2EPage = class F2EPage extends React.Component{
	constructor(props) {
		super(props);
	}
	componentDidMount() {
		let {loadF2eWorks} = this.props;
		loadF2eWorks();
	}
	render (){
		let {f2eWorks} = this.props;
		if(!f2eWorks || !Array.isArray(f2eWorks)){
			return <div/>;
		}
		return <section id="webdesign">
			<div className="container">
					{/* <div className="row">
						<SiteShlef {...(f2eWorks[0])}>
							<p>這是為阿姨製作的 <b className="em-strong" >新版</b> 官網 - Hi-Tech Digital CCTV，位於澳洲，是一家專門銷售監控系統的商店。A real world website project  integrate with react, redux, server side rendering, redux form, auth with RESTful API server, user login(both local and social Logins) and with aditional web UI to ADD/DELETE/EDIT backend data。
							<b className="em-strong">首頁除banner外，等待阿姨提供首頁內容。另因Heroku 限制網站容量大小，Demo網頁產品的Documents未全放上去而僅連結至單一檔案)</b></p>
						</SiteShlef>
					</div> */}
					{f2eWorks.map((item, id)=>{
						return <SiteShlef key={id} {...item}/>
					})}			
				</div>
		</section>
	}
}

F2EPage.propTypes = {

};
function mapStateToProps(state, ownProps) {
	return {
	  device: state.device,
	  f2eWorks: state.f2eWorks
	};
  }
F2EPage.serverFetch =  [ loadF2eWorks ];
F2EPage = connect(mapStateToProps,{loadF2eWorks})(F2EPage);

export default F2EPage;
