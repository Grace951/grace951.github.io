if (process.env.BROWSER) {
	require ('./f2e.sass');
}
import React from 'react';

const F2EPage = (props) => (
	<div className="container">
		<div className="row">
			F2E
		</div>
	</div>
);

F2EPage.propTypes = {
};

export default F2EPage;
