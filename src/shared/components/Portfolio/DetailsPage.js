if (process.env.BROWSER) {
	require ('./details.sass');
}
import React from 'react';

const DetailsPage = (props) => (
	<div className="container">
		<div className="row">
			DETAILS
		</div>
	</div>
);

DetailsPage.propTypes = {
};

export default DetailsPage;
