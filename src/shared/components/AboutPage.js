import './about.sass';
import React from 'react';
import {Skill} from './About/Skill';
import {Timeline} from './About/Timeline';

const AboutPage = (props) => (
<div id="a2">
	<section id="middle">
        <div className="container">
            <div className="row c">
				<Skill/>
            </div>
        </div>
    </section>
    {/* <section id="cd-timeline" className="cd-container">
        <Timeline /> 
    </section>  */}
</div>	
);

AboutPage.propTypes = {
};

export default AboutPage;
