import React, { Component } from 'react';

class Experience extends Component {
	render() {
		return (
			<div>
				<section className="colorlib-experience" data-section="experience">
					<div className="colorlib-narrow-content">
						<div className="row">
							<div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
								<span className="heading-meta">Experience</span>
								<h2 className="colorlib-heading animate-box">Work Experience</h2>
							</div>
						</div>
						<div className="row">
							<div className="col-md-12">
								<div className="timeline-centered">
									<article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
										<div className="timeline-entry-inner">
											<div className="timeline-icon color-1"><i className="icon-pen2"></i> </div>
											<div className="timeline-label">
												<h2><a href={`${process.env.PUBLIC_URL}`}>Front End Developer at Gama Informatika</a> <span>2019-Present</span></h2>
												<p>
													Developed the front end of the application using HTML5, CSS3 and Javascript.
													Created interactive websites and website features using Javascript and jQuery.
													Used AJAX and JSON for client-side scripting to interact with API.
												</p>
											</div>
										</div>
									</article>


									<article className="timeline-entry animate-box" data-animate-effect="fadeInRight">
										<div className="timeline-entry-inner">
											<div className="timeline-icon color-2"><i className="icon-pen2"></i> </div>
											<div className="timeline-label">
												<h2>
													<a href={`${process.env.PUBLIC_URL}`}>Student Ambassador at 	CICIL.CO.ID </a>
													<span>2018-2019</span>
												</h2>
												<p>Assist the process of applying for installment facilities and increase CICIL brand awareness in the campus environment.
                                                </p>
											</div>
										</div>
									</article>

									<article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
										<div className="timeline-entry-inner">
											<div className="timeline-icon color-3"> <i className="icon-pen2"></i> </div>
											<div className="timeline-label">
												<h2><a href={`${process.env.PUBLIC_URL}`}>Assistant Lecturer at UTY</a> <span>2018-2019</span></h2>
												<p>
													Responsible for teaching students in several subjects including
													Object Oriented Programming, Database System, and Information Technology Application
                                                </p>
											</div>
										</div>
									</article>

									<article className="timeline-entry begin animate-box" data-animate-effect="fadeInBottom">
										<div className="timeline-entry-inner">
											<div className="timeline-icon color-none"></div>
										</div>
									</article>
								</div>
							</div>
						</div>
					</div>
				</section>
			</div>
		)
	}
}

export default Experience;