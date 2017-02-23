if (process.env.BROWSER) {
	require ('./timeline.sass');
}
import React from 'react';

class Timeline extends React.Component{
	constructor(props) {
		super(props);
	}
	render() {
		return (	
	<div className="timeline">
		<div className="cd-timeline-block">
            <div className="cd-timeline-img cd-brown">
				<h2>My Learning Path</h2>
            </div>

			<div className="cd-timeline-content cd-timeline-block1">
				<div className="media">
					<div className="media-body">
						<h3>Software Engineer</h3>
						<ul className="tag clearfix">
							<li className="">Embedded Linux</li>
							<li className="">C</li>
							<li className="">F2E</li>
							<li className="">Android</li>
							<li className="">Bluetooth</li>
						</ul>
					</div>
				</div>
				<ul className="background">
					<li>Real  Time  System  &  Multi-thread  Programming</li>
					<li>Network  Protocol  Stack  Development</li>
					<li>Shell,  Perl,  GNU  toolchain</li>
					<li>Front-end (HTML  +  Javascript  +  AJAX    +  CSS)</li>
					<li>Backend (CGI by C Language)</li>
					<li>Android Telnet Bluetooth Stack</li>
				</ul>
				<span className="cd-date">2003</span>
			</div>
		</div> 

        <div className="cd-timeline-block cd-timeline-block2">
            <div className="cd-timeline-img cd-red">
            </div> 

            <div className="cd-timeline-content">
                <div className="media">
                    <div className="media-body">
                        <h3>職訓局文化多媒體班學生</h3>
                        <ul className="tag clearfix">
                            <li className="">Photoshop</li>
                            <li className="">Illustrator</li>
                            <li className="">Dreamweaver</li>
                            <li className="">Flash</li>
                        </ul>
                    </div>
                    <div className="media-img">
                        <a href="http://www.sce.pccu.edu.tw/" target="_blank"><img className="img-responsive" src="/images/sce_logo.jpg" alt=""/></a>
                    </div>

                </div>
                <p>對設計有強烈興趣的我欲轉職為設計師。因而參加職訓局文化多媒體班學習photoshop、illustrator、flash、dream weaver及網頁設計技巧，為期三個月。</p>
                <span className="cd-date">2014 5月</span>
            </div> 
        </div>

        <div className="cd-timeline-block cd-timeline-block3">
            <div className="cd-timeline-img cd-blue">
            </div>

            <div className="cd-timeline-content">
                <div className="media">
                    <div className="media-body">
                        <h3>易禧創意平面美編職人班學生</h3>

                        <ul className="tag clearfix">
                            <li className="">Graphic Design</li>
                            <li className="">Branding</li>
                            <li className="">InDesidn</li>
                        </ul>
                    </div>
                    <div className="media-img">
                        <a href="http://www.accmedia.com.tw/" target="_blank"><img className="img-responsive" src="/images/ecdesign.jpg" alt=""/></a>
                    </div>

                </div>
                <p>至易禧創意進修Photoshop, Illustrator 及 InDesign。亦接受構圖、色彩、排版及 MindMap 等設計訓練。在這近半年的時間，在家全心大量實做練習、在課堂中多多請老師評圖與建議，老師的耐心指導與分析使我進步許多。</p>
                <span className="cd-date">2014 12月</span>
            </div>
        </div> 

        <div className="cd-timeline-block cd-timeline-block4">
            <div className="cd-timeline-img cd-orange">
            </div>

            <div className="cd-timeline-content">
                <div className="media">
                    <div className="media-body">
                        <h3>貓頭鷹親子教育協會美編志工</h3>

                        <ul className="tag clearfix">
                            <li className="">Poster Design</li>
                            <li className="">Illustration</li>
                            <li className="">T-shirt Design</li>
                        </ul>
                    </div>
                    <div className="media-img">
                        <a href="http://www.owltale.org.tw/ap/index.aspx" target="_blank"><img className="img-responsive" src="/images/owl.png" alt=""/></a>
                    </div>

                </div>
                <p>在易禧上課的同一時間也在貓頭鷹親子教育學會擔任美編志工，繪製網頁Banner, 設計DM , T-shirt 及形象廣告來增加實作經驗。</p>
                <span className="cd-date">2015 1月</span>
            </div>
        </div>

        <div className="cd-timeline-block cd-timeline-block5">
            <div className="cd-timeline-img cd-lightblue">
            </div> 

            <div className="cd-timeline-content ">
                <div className="media">
                    <div className="media-body">
                        <h3>飛肯設計RWD手機網頁設計班學生</h3>

                        <ul className="tag clearfix">
                            <li className="">CSS3</li>
                            <li className="">Responsive Web Design</li>
                        </ul>
                    </div>
                    <div className="media-img">
                        <a href="http://www.flycan.com.tw/" target="_blank"><img className="img-responsive" src="/images/flycan.jpg" alt=""/></a>
                    </div>

                </div>
                <ul className="background">
                    <li>Responsive Web Design</li>
                    <li>CSS3 Animation</li>
                    <li>CSS Pseudo-classes(before/after/nth-child/first-child/last-child)</li>
                    <li>CSS應用 ( background-size/background-position/box-radius/box-shadow/box-sizing:border-box/CSS Sprite)</li>
                    <li>視網膜解析度圖片</li>
                </ul>
                <span className="cd-date">2015 5月</span>
            </div> 
        </div> 

        <div className="cd-timeline-block cd-timeline-block6">
            <div className="cd-timeline-img cd-blue">
            </div>

            <div className="cd-timeline-content ">
                <div className="media">
                    <div className="media-body">
                        <h3>易禧創意商業插畫訓練班學生</h3>

                        <ul className="tag clearfix">
                            <li className="">構圖</li>
                            <li className="">配色</li>
                            <li className="">繪圖版訓練</li>
                            <li className="">軟體上色訓練(PS/AI)</li>
                        </ul>
                    </div>
                    <div className="media-img">
                        <a href="http://www.accmedia.com.tw/" target="_blank"><img className="img-responsive" src="/images/ecdesign.jpg" alt=""/></a>
                    </div>
                </div>
                <p>在商業插畫課程中，除了學習手繪轉數位(向量與點陣)的上色流程與方式之外，老師亦常常耐心的一對一教學，針對我們的作品，以構圖、色彩、風格來分析講解，收穫良多。</p>
                <span className="cd-date">2015 7月</span>
            </div>
        </div> 
        <div className="cd-timeline-block cd-timeline-block7">
            <div className="cd-timeline-img cd-red">
            </div> 

            <div className="cd-timeline-content ">
                <div className="media">
                    <div className="media-body">
                        <h3>Attend on-line Training Class</h3>

                        <ul className="tag clearfix">
                            <li className="">react</li>
                            <li className="">redux</li>
                            <li className="">angular2</li>
                            <li className="">node</li>
                            <li className="">javascript</li>
                        </ul>
                    </div>
                    <div className="media-img online">
                        <a href="https://www.pluralsight.com/" target="_blank"><img className="img-responsive" src="/images/skills/pluralsight.png" alt=""/></a>
                        <a href="https://www.udemy.com/" target="_blank" ><img className="img-responsive" src="/images/skills/codeSchool.svg" style={{maxWidth: "140px"}} alt=""/></a>
                        <a href="https://egghead.io/" target="_blank" ><img className="img-responsive" src="/images/skills/egghead.svg" style={{width: "50px"}} alt=""/></a>
                    </div>
                </div>
                <ul className="background">
                    <li><a target="_blank" href="https://www.pluralsight.com/courses/react-redux-react-router-es6">Building Applications with React and Redux in ES6</a> </li>
                    <li><a target="_blank" href="https://www.codeschool.com/courses/powering-up-with-react"> Powering Up With React</a></li>                    
                    <li><a target="_blank" href="https://www.pluralsight.com/courses/angular-2-getting-started-update"> Angular 2: Getting Started</a></li>
                    <li><a target="_blank" href="https://www.udemy.com/understand-javascript/"> JavaScript: Understanding the Weird Parts</a></li>
                    <li><a target="_blank" href="https://online.reacttraining.com/p/reactjsfundamentals"> React.js Fundamentals</a> </li>
                    <li><a target="_blank" href="https://egghead.io/courses/getting-started-with-redux">Getting Started with Redux</a></li>
                    <li><a target="_blank" href="https://www.pluralsight.com/courses/javascript-module-fundamentals"/> JavaScript Module Fundamentals</li>
                    <li><a target="_blank" href="https://www.codeschool.com/courses/es2015-the-shape-of-javascript-to-come"/> ES2015: The Shape of JavaScript to Come</li>
                </ul>
                <span className="cd-date">2016 - 2017</span>
            </div> 
        </div> 
        <div className="cd-timeline-block cd-timeline-block8">
            <div className="cd-timeline-img cd-lightblue">
            </div> 

            <div className="cd-timeline-content ">
                <div className="media">
                    <div className="media-body">
                        <h3>飛肯設計 React JS 從入門到實作應用班學生</h3>

                        <ul className="tag clearfix">
                            <li className="">React</li>
                            <li className="">Redux</li>
                            <li className="">React Router</li>
                            <li className="">npm + webpack</li>
                        </ul>
                    </div>
                    <div className="media-img">
                        <a href="http://www.flycan.com.tw/" target="_blank"><img className="img-responsive" src="/images/flycan.jpg" alt=""/></a>
                    </div>

                </div>
                <ul className="background">
                    <li>React Component Lifecycle</li>
                    <li>React Animation Addon</li>
                    <li>React Router</li>
                    <li>Redux</li>
                    <li>npm + webpack</li>
                </ul>
                <span className="cd-date">2016 - 2017</span>
            </div> 
        </div>  
	</div>
		);
	}
}

export {Timeline};
