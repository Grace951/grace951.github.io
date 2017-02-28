import React from 'react';
import { Router, Route, IndexRoute, IndexLink, browserHistory } from 'react-router';

import HomePage from '../components/HomePage';
import AboutPage from '../components/AboutPage';
import PortfolioPage from '../components/PortfolioPage';
import DetailsPage from '../components/Portfolio/DetailsPage';
import F2EPage from '../components/Portfolio/F2EPage';
import GraphicPage from '../components/Portfolio/GraphicPage';
import EditoralPage from '../components/Portfolio/EditoralPage';


import { Root, NotFoundPage, UnauthorizedPage} from '../components/index';
//https://github.com/reactjs/react-router-redux/issues/179

const Routes = (props) => {
	let {history} = props;
	return (
	<Router history={history}>
		<Route path="/" component={Root}>
			<IndexRoute component={HomePage}/>
			<Route path="home" component={HomePage} onEnter={props.hideXsNav} />
			<Route path="portfolio" component={PortfolioPage} >
				<Route path="f2e" component={F2EPage} onEnter={props.hideXsNav} />
				<Route path="graphic" component={GraphicPage} onEnter={props.hideXsNav} />
				<Route path="editoral" component={EditoralPage} onEnter={props.hideXsNav} />
				<Route path=":id" component={DetailsPage} onEnter={props.hideXsNav} />
			</Route>
			<Route path="aboutme" component={AboutPage} onEnter={props.hideXsNav} />
			<Route path="*" component={NotFoundPage} />
		</Route>
		<Route path="*" component={NotFoundPage} />
	</Router>);
}
Routes.propTypes = {
	history: React.PropTypes.object.isRequired,
	hideXsNav: React.PropTypes.func.isRequired
};


export default Routes;
