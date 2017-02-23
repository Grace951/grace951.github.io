if (process.env.BROWSER) {
	require ('./edit.sass');
}
import React from 'react';

const EditoralPage = (props) => (
	<div className="container">
		<div className="row">
			EDIT
		</div>
	</div>
);

EditoralPage.propTypes = {
};

export default EditoralPage;
