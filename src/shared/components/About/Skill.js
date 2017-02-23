if (process.env.BROWSER) {
	require ('./skill.sass');
}
import React from 'react';

class Skill extends React.Component{
		constructor(props) {
			super(props);
		}
		render() {
			return (						                
				<div className="main-skill">
                    <div className="skill">
                        <div className="skill-overview">
                            <h2>Favorite Skills</h2>
                            <div className="skilltree">
                                <ul>
                                    <li>
                                        Modern Javascript
                                        <ul>
                                            <li>React <img className="skill-logo" style={{width:"30px"}} src="images/skills/reactjs.svg"/></li>
                                            <li>Redux <img className="skill-logo" src="images/skills/redux.png"/></li>
                                            <li>Angular2 <img className="skill-logo" src="images/skills/angular.png"/></li>
                                            <li>NodeJs<img className="skill-logo" src="images/skills/node.png"/></li>
                                            <li>ES6<img className="skill-logo" src="images/skills/es6.png"/></li>
                                        </ul>
                                    </li>
                                    <li>Front-end Development
                                        <ul>
                                            <li>HTML5<img className="skill-logo" src="images/skills/html5.png"/></li>
                                            <li>CSS3<img className="skill-logo" src="images/skills/css3.png"/></li>
                                            <li>SASS<img className="skill-logo" src="images/skills/sass.png"/></li>
                                            <li>Compass<img className="skill-logo" src="images/skills/compass.png"/></li>
                                            <li>BootStrap<img className="skill-logo" src="images/skills/bootstrap.png"/></li>
                                            <li>Webpack<img className="skill-logo" style={{width:"30px"}} src="images/skills/webpack.svg"/></li>
                                            <li>NPM<img className="skill-logo" src="images/skills/npm.png"/></li>
                                            <li>RWD<img className="skill-logo" src="images/skills/rwd.png"/></li>
                                            <li style={{height: "40px"}}>jQuery<img className="skill-logo" style={{width: "40px", height:"40px", maxHeight:"40px"}} src="images/skills/jquerylogo.png"/></li>
                                        </ul>
                                    </li>
                                    <li>Back-end Development
                                        <ul>
                                            <li>NodeJs<img className="skill-logo" src="images/skills/node.png"/></li>
                                            <li>MongoDB<img className="skill-logo" src="images/skills/mongodb.png"/></li>
                                        </ul>
                                    </li>
                                    <li>General Skill
                                        <ul>
                                            <li>Git<img className="skill-logo" src="images/skills/git.png"/></li>
                                            <li>Github<img className="skill-logo" src="images/skills/github.png"/></li>
                                            <li>PhotoShop<img className="skill-logo" src="images/skills/photoshop.png"/></li>
                                            <li>Illustrator<img className="skill-logo" src="images/skills/illustrator.png"/></li>
                                        </ul>
                                    </li>
                                </ul>
                            </div>
                        </div>
                         <div className="skill-bar ">
                            <h2>My Experience</h2>
                            <ul className="experience">
                                <li>(2006 - 2010) Software Engineer / 3.5 years </li>
                                <li>(2010 - 2011) Take Care of My Father / 1.5 year </li>
                                <li>(2012 - 2014) Software Engineer / 2 years </li>
                                <li>(2014 - 2016) Learn Graphic Design and Web Design / 1.5 years</li>
                                <li>(2016 - 2017) Front-end Developer / 1 years </li>
                            </ul>
                        </div>
                        <div className="skill-bar ">
                            <h2>My Creations</h2>
                            <ul className="experience">
                                <li><a target="_blank" href="https://github.com/Grace951">Github page</a></li>
                                <li><a target="_blank" href="https://react-redux-demo-chingching.herokuapp.com/">React App - Hi-Tech Digital CCTV</a></li>
                                <li><a target="_blank" href="http://www.hitechdigitalcctv.com.au/#/home">Angular App - Hi-Tech Digital CCTV</a></li>
                                <li><a target="_blank" href="http://paints.byethost4.com/">jQuery app - 經典名畫</a></li>
                            </ul>
                        </div>
                        <div className="skill-bar">
                            <h2>My Little React Exercise</h2>
                            <ul className="experience">
                                <li><a target="_blank" href="https://github.com/Grace951/react-table">Sortable Searchable React Paging Table</a></li>
                                <li><a target="_blank" href="https://grace951.github.io/react-table/">Demo</a></li>
                                <li><a target="_blank" href="https://github.com/Grace951/react-image-carousel">React Image Carousel</a></li>
                                <li><a target="_blank" href="https://grace951.github.io/react-image-carousel/">Demo</a></li>
                                <li><a target="_blank" href="https://grace951.github.io/react-minesweeper/">Little Game - Mine Sweeper</a></li>
                                <li><a target="_blank" href="https://github.com/Grace951/react-minesweeper">Demo</a></li>
                            </ul>
                        </div>
                        <div className="practice">

                            <div className="progress-wrap">
                                <h3>React + Redux</h3>
                                <div className="progress">
                                  <div className="progress-bar  color1" role="progressbar" aria-valuenow="40" aria-valuemin="0" aria-valuemax="100" style={{width: "90%"}}>
                                    <span className="bar-width">90%</span>
                                  </div>

                                </div>
                            </div>

                            <div className="progress-wrap">
                                <h3>HTML + CSS + RWD</h3>
                                <div className="progress">
                                  <div className="progress-bar color2" role="progressbar" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100" style={{width: "90%"}}>
                                   <span className="bar-width">90%</span>
                                  </div>
                                </div>
                            </div>

                           <div className="progress-wrap">
                                <h3>Web Design</h3>
                                <div className="progress">
                                  <div className="progress-bar color5" role="progressbar" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100" style={{width: "85%"}}>
                                    <span className="bar-width">85%</span>
                                  </div>
                                </div>
                            </div>

                            <div className="progress-wrap">
                                <h3>NodeJs, MongoDB</h3>
                                <div className="progress">
                                  <div className="progress-bar color3" role="progressbar" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100" style={{width: "80%"}}>
                                    <span className="bar-width">80%</span>
                                  </div>
                                </div>
                            </div>

                            <div className="progress-wrap">
                                <h3>Angular2</h3>
                                <div className="progress">
                                  <div className="progress-bar color4" role="progressbar" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100" style={{width: "80%"}}>
                                    <span className="bar-width">80%</span>
                                  </div>
                                </div>
                            </div>
                         </div>
                    </div>
                </div>
			);
		}
}
export {Skill};
