if (process.env.BROWSER) {
	require ('./portfolio.sass');
}
import PropTypes from 'prop-types';
import React from 'react';

const PortfolioPage = (props) => (
	<div className="portfolio">
		{props.children}
	</div>
);

PortfolioPage.propTypes = {
    children: PropTypes.oneOfType([
      PropTypes.arrayOf(PropTypes.node),
      PropTypes.node
    ])		
};

export default PortfolioPage;
