if (process.env.BROWSER) {
	require ('./portfolio.sass');
}
import React from 'react';

const PortfolioPage = (props) => (
	<div className="portfolio">
		{props.children}
	</div>
);

PortfolioPage.propTypes = {
    children: React.PropTypes.oneOfType([
      React.PropTypes.arrayOf(React.PropTypes.node),
      React.PropTypes.node
    ])		
};

export default PortfolioPage;
