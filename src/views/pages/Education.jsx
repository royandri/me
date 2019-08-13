import React, { Component } from 'react';

class Education extends Component {
	render() {
		return (
			<div>
				<section className="colorlib-education" data-section="education">
					<div className="colorlib-narrow-content">
						<div className="row">
							<div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
								<span className="heading-meta">Education</span>
								<h2 className="colorlib-heading animate-box">Education</h2>
							</div>
						</div>
						<div className="row">
							<div className="col-md-12 animate-box" data-animate-effect="fadeInLeft">
								<div className="fancy-collapse-panel">
									<div className="panel-group" id="accordion" role="tablist" aria-multiselectable="true">
										<div className="panel panel-default">
											<div className="panel-heading" role="tab" id="headingOne">
												<h4 className="panel-title">
													<a data-toggle="collapse" data-parent="#accordion" href="#collapseOne"
														aria-expanded="true" aria-controls="collapseOne">
														Bachelor Degree
													</a>
												</h4>
											</div>
											<div id="collapseOne" className="panel-collapse collapse in" role="tabpanel"
												aria-labelledby="headingOne">
												<div className="panel-body">
													<div className="row">
														<div className="col-md-6">
															<small style={{ color: '#2c98f0' }}> <b> 2015 - 2019</b> </small><br></br>
															<small> Computer Science </small> <br></br>
															<p> University of Technology Yogyakarta </p>
														</div>
													</div>
												</div>
											</div>
										</div>
										<div className="panel panel-default">
											<div className="panel-heading" role="tab" id="headingThree">
												<h4 className="panel-title">
													<a className="collapsed" data-toggle="collapse" data-parent="#accordion"
														href="#collapseThree" aria-expanded="false"
														aria-controls="collapseThree">Senior High School
													</a>
												</h4>
											</div>
											<div id="collapseThree" className="panel-collapse collapse" role="tabpanel"
												aria-labelledby="headingThree">
												<div className="panel-body">
													<small style={{ color: '#2c98f0' }}> <b> 2012 - 2015</b> </small> <br></br>
													<small> Computer and Network Engineering </small>
													<p>SMK Negeri 1 Parittiga</p>
												</div>
											</div>
										</div>

										<div className="panel panel-default">
											<div className="panel-heading" role="tab" id="headingFour">
												<h4 className="panel-title">
													<a className="collapsed" data-toggle="collapse" data-parent="#accordion"
														href="#collapseFour" aria-expanded="false"
														aria-controls="collapseFour">Junior High School
													</a>
												</h4>
											</div>
											<div id="collapseFour" className="panel-collapse collapse" role="tabpanel"
												aria-labelledby="headingFour">
												<div className="panel-body">
													<small style={{ color: '#2c98f0' }}> <b> 2009 - 2012</b> </small>
													<p>SMP Negeri 2 Parittiga</p>
												</div>
											</div>
										</div>

										<div className="panel panel-default">
											<div className="panel-heading" role="tab" id="headingFive">
												<h4 className="panel-title">
													<a className="collapsed" data-toggle="collapse" data-parent="#accordion"
														href="#collapseFive" aria-expanded="false"
														aria-controls="collapseFive">Elementary School
													</a>
												</h4>
											</div>
											<div id="collapseFive" className="panel-collapse collapse" role="tabpanel"
												aria-labelledby="headingFive">
												<div className="panel-body">
													<small style={{ color: '#2c98f0' }}> <b> 2004 - 2009</b> </small>
													<p>SD Negeri 13 Parittiga</p>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>
			</div >
		)
	}
}

export default Education;