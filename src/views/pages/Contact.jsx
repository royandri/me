import React, {Component} from 'react';

class Contact extends Component {
    render () {
        return (
            <div>
                <section class="colorlib-contact" data-section="contact">
					<div class="colorlib-narrow-content">
						<div class="row">
							<div class="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
								<span class="heading-meta">Get in Touch</span>
								<h2 class="colorlib-heading">Contact</h2>
							</div>
						</div>
						<div class="row">
							<div class="col-md-5">
								<div class="colorlib-feature colorlib-feature-sm animate-box" data-animate-effect="fadeInLeft">
									<div class="colorlib-icon">
										<i class="icon-globe-outline"></i>
									</div>
									<div class="colorlib-text">
										<p><a href="#">korneliusroy@gmail.com</a></p>
									</div>
								</div>

								<div class="colorlib-feature colorlib-feature-sm animate-box" data-animate-effect="fadeInLeft">
									<div class="colorlib-icon">
										<i class="icon-map"></i>
									</div>
									<div class="colorlib-text">
										<p>Sleman, Yogyakarta</p>
									</div>
								</div>

								<div class="colorlib-feature colorlib-feature-sm animate-box" data-animate-effect="fadeInLeft">
									<div class="colorlib-icon">
										<i class="icon-phone"></i>
									</div>
									<div class="colorlib-text">
										<p><a href="tel://">+628 17 531 562</a></p>
									</div>
								</div>
							</div>
							<div class="col-md-7 col-md-push-1">
								<div class="row">
									<div class="col-md-10 col-md-offset-1 col-md-pull-1 animate-box" data-animate-effect="fadeInRight">
										<form action="">
											<div class="form-group">
												<input type="text" class="form-control" placeholder="Name"></input>
											</div>
											<div class="form-group">
												<input type="text" class="form-control" placeholder="Email"></input>
											</div>
											<div class="form-group">
												<input type="text" class="form-control" placeholder="Subject"></input>
											</div>
											<div class="form-group">
												<textarea name="" id="message" cols="30" rows="7" class="form-control" placeholder="Message"></textarea>
											</div>
											<div class="form-group">
												<input type="submit" class="btn btn-primary btn-send-message" value="Send Message"></input>
											</div>
										</form>
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

export default Contact;