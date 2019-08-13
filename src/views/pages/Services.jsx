import React, {Component} from 'react';

class Service extends Component {
    render () {
        return (
            <div>
                <section className="colorlib-services" data-section="services">
					<div className="colorlib-narrow-content">
						<div className="row">
							<div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box"
								data-animate-effect="fadeInLeft">
								<span className="heading-meta">What I do?</span>
								<h2 className="colorlib-heading">Here are some of my expertise</h2>
							</div>
						</div>
						<div className="row row-pt-md">
							<div className="col-md-4 text-center animate-box">
								<div className="services color-1">
									<span className="icon">
										<i className="icon-bulb"></i>
									</span>
									<div className="desc">
										<h3>Problem Solving</h3>
										<p>Able to use logic, analytics, and data to find solutions to problems.</p>
									</div>
								</div>
							</div>
							<div className="col-md-4 text-center animate-box">
								<div className="services color-2">
									<span className="icon">
										<i className="icon-data"></i>
									</span>
									<div className="desc">
										<h3>Good Communication</h3>
										<p>Able to communicate effectively with others.</p>
									</div>
								</div>
							</div>
							<div className="col-md-4 text-center animate-box">
								<div className="services color-3">
									<span className="icon">
										<i className="icon-phone3"></i>
									</span>
									<div className="desc">
										<h3>Time Management</h3>
										<p>
											Reliable and trusted to get the job done as quickly as possible.
										</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>
            </div>
        )
    }
}

export default Service;