
import HomePage from '../components/HomePage';
import AboutPage from '../components/AboutPage';
import PortfolioPage from '../components/PortfolioPage';
import DetailsPage from '../components/Portfolio/DetailsPage';
import F2EPage from '../components/Portfolio/F2EPage';
import GraphicPage from '../components/Portfolio/GraphicPage';
import EditoralPage from '../components/Portfolio/EditoralPage';
import React from 'react';
import {Route} from "react-router-dom";

function RouteWithSubRoutes(route) {
	return (
	  <Route
		path={route.path}
		render={props => (
		  // pass the sub-routes down to keep nesting
		  <route.component {...props} routes={route.routes} />
		)}
	  />
	);
}

const routes = [
	{
	  path: "/aboutme",
	  component: AboutPage,
	},
	{
	  path: "/home",
	  component: HomePage,
	},
	{
	  path: "/portfolio",
	  component: PortfolioPage,
	  routes: [
		{
		  path: "/portfolio/f2e",
		  component: F2EPage
		},
		{
		  path: "/portfolio/editoral",
		  component: EditoralPage
		},
		{
			path: "/portfolio/graphic",
			component: GraphicPage
		},
		{
			path: "/portfolio/:id",
			component: DetailsPage
		}
	  ]
	},
	{
		path: "/",
		component: HomePage
	},
];

export {routes, RouteWithSubRoutes};
