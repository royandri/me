import React, {Component} from 'react';

class Header extends Component {
    render () {
        return(
            <div>
				<section id="colorlib-hero" className="js-fullheight" data-section="home">
                	<div className="flexslider js-fullheight">
                		<ul className="slides">
                			<li style = {{backgroundImage: 'url(images/img_bg_1.jpg)'}}>
                				<div className="overlay"></div>
                				<div className="container-fluid">
                					<div className="row">
                						<div
                							className="col-md-6 col-md-offset-3 col-md-pull-3 col-sm-12 col-xs-12 js-fullheight slider-text">
                							<div className="slider-text-inner js-fullheight">
                								<div className="desc">
                									<h1>Hi! <br></br>I'm Roy</h1>
                									{/* <h2></h2> */}
                									<p>
														<a href="/#" className="btn btn-primary btn-learn">Download CV <i className="icon-download4"></i></a>
													</p>
                								</div>
                							</div>
                						</div>
                					</div>
                				</div>
                			</li>
                			<li style = {{backgroundImage: 'url(images/img_bg_2.jpg'}}>
                				<div className="overlay"></div>
                				<div className="container-fluid">
                					<div className="row">
                						<div
                							className="col-md-6 col-md-offset-3 col-md-pull-3 col-sm-12 col-xs-12 js-fullheight slider-text">
                							<div className="slider-text-inner">
                								<div className="desc">
                									<h1> I am <br></br>a Web Developer</h1>
                									{/* <h2></h2> */}
                									<p>
														<a href="/#" className="btn btn-primary btn-learn">View Portfolio <i className="icon-briefcase3"></i></a>
													</p>
                								</div>
                							</div>
                						</div>
                					</div>
                				</div>
                			</li>
                		</ul>
                	</div>
                </section>
            </div>
        )
    }
}

export default Header;