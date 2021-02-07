import React from 'react';
import {Switch} from "react-router-dom";
import {RouteWithSubRoutes} from '../route/index';


function PortfolioPage({ routes }) {
	return (
	  <div>
		<Switch>
		  {routes.map((route, i) => (
			<RouteWithSubRoutes key={route.path} {...route} />
		  ))}
		</Switch>
	  </div>
	);
  }
  

  export default PortfolioPage;
