if (process.env.BROWSER) {
	require ('./home.sass');
}
import React from 'react';

const HomePage = (props) => (
	<div className="container">
		<div className="row">
			HOME
		</div>
	</div>
);

HomePage.propTypes = {
};

export default HomePage;
