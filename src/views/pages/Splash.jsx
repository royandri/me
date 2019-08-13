import React, { Component } from 'react';


class Splash extends Component {
	render() {
		return (
			<div>
				<div id="colorlib-counter" className="colorlib-counters" style={{ backgroundImage: 'url(../assets/images/cover_bg_1.jpg)' }} data-stellar-background-ratio="0.5">
					<div className="overlay"></div>
					<div className="colorlib-narrow-content">
						<div className="row"></div>
						<div className="row">
							<div className="col-md-3 text-center animate-box">
								<span className="colorlib-counter js-counter" data-from="0" data-to="105" data-speed="5000" data-refresh-interval="50"></span>
								<span className="colorlib-counter-label">Cups of coffee</span>
							</div>
							<div className="col-md-3 text-center animate-box">
								<span className="colorlib-counter js-counter" data-from="0" data-to="20" data-speed="5000" data-refresh-interval="50"></span>
								<span className="colorlib-counter-label">Projects</span>
							</div>
							<div className="col-md-3 text-center animate-box">
								<span className="colorlib-counter js-counter" data-from="0" data-to="12" data-speed="5000" data-refresh-interval="50"></span>
								<span className="colorlib-counter-label">Clients</span>
							</div>
							<div className="col-md-3 text-center animate-box">
								<span className="colorlib-counter js-counter" data-from="0" data-to="0" data-speed="5000" data-refresh-interval="50"></span>
								<span className="colorlib-counter-label">Partners</span>
							</div>
						</div>
					</div>
				</div>
			</div>
		)
	}
}

export default Splash;