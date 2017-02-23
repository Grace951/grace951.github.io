if (process.env.BROWSER) {
	require ('./footer.sass');
}

import { Link} from 'react-router';
import React from 'react';

const Footer = (props) => (
    <footer id="footer" className="midnight-blue">
        <div className="container">
            <div className="row">
                <div className="col-xs-12 col-sm-6">
                    &copy; 2017 ChingChing Yeh. All Rights Reserved.
                </div>
                <div className="col-sm-6 hidden-xs">
                    <ul className="">
                        <li><Link to="/home">Home</Link></li>
                        <li><Link to="/aboutme">About Me</Link></li>
                        <li><Link to="/portfolio/f2e">Portfolio</Link></li>
                    </ul>
                </div>
            </div>
        </div>
    </footer>
)

export default Footer;
