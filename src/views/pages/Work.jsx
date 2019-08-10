import React, {Component} from 'react';

class Work extends Component {
    render () {
        return (
            <div>
                <section class="colorlib-work" data-section="work">
					<div class="colorlib-narrow-content">
						<div class="row">
							<div class="col-md-6 col-md-offset-3 col-md-pull-3 animate-box"
								data-animate-effect="fadeInLeft">
								<span class="heading-meta">My Work</span>
								<h2 class="colorlib-heading animate-box">Recent Work</h2>
							</div>
						</div>
						<div class="row row-bottom-padded-sm animate-box" data-animate-effect="fadeInLeft">
							<div class="col-md-12">
								<p class="work-menu"><span><a href="#" class="active">Graphic Design</a></span> <span><a
											href="#">Web Design</a></span> <span><a href="#">Software</a></span>
									<span><a href="#">Apps</a></span></p>
							</div>
						</div>
						<div class="row">
							<div class="col-md-6 animate-box" data-animate-effect="fadeInLeft">
								<div class="project" style={{backgroundImage: 'url(images/img-1.jpg)'}}>
									<div class="desc">
										<div class="con">
											<h3><a href="work.html">Work 01</a></h3>
											<span>Website</span>
											<p class="icon">
												<span><a href="#"><i class="icon-share3"></i></a></span>
												<span><a href="#"><i class="icon-eye"></i> 100</a></span>
												<span><a href="#"><i class="icon-heart"></i> 49</a></span>
											</p>
										</div>
									</div>
								</div>
							</div>
							<div class="col-md-6 animate-box" data-animate-effect="fadeInRight">
								<div class="project" style={{ backgroundImage: 'url(images/img-2.jpg)'}}>
									<div class="desc">
										<div class="con">
											<h3><a href="work.html">Work 02</a></h3>
											<span>Animation</span>
											<p class="icon">
												<span><a href="#"><i class="icon-share3"></i></a></span>
												<span><a href="#"><i class="icon-eye"></i> 100</a></span>
												<span><a href="#"><i class="icon-heart"></i> 49</a></span>
											</p>
										</div>
									</div>
								</div>
							</div>
							<div class="col-md-6 animate-box" data-animate-effect="fadeInTop">
								<div class="project" style={{backgroundImage: 'url(images/img-3.jpg)'}}>
									<div class="desc">
										<div class="con">
											<h3><a href="work.html">Work 03</a></h3>
											<span>Illustration</span>
											<p class="icon">
												<span><a href="#"><i class="icon-share3"></i></a></span>
												<span><a href="#"><i class="icon-eye"></i> 100</a></span>
												<span><a href="#"><i class="icon-heart"></i> 49</a></span>
											</p>
										</div>
									</div>
								</div>
							</div>
							<div class="col-md-6 animate-box" data-animate-effect="fadeInBottom">
								<div class="project" style={{backgroundImage: 'url(images/img-4.jpg)'}}>
									<div class="desc">
										<div class="con">
											<h3><a href="work.html">Work 04</a></h3>
											<span>Application</span>
											<p class="icon">
												<span><a href="#"><i class="icon-share3"></i></a></span>
												<span><a href="#"><i class="icon-eye"></i> 100</a></span>
												<span><a href="#"><i class="icon-heart"></i> 49</a></span>
											</p>
										</div>
									</div>
								</div>
							</div>
							<div class="col-md-6 animate-box" data-animate-effect="fadeInLeft">
								<div class="project" style={{ backgroundImage: 'url(images/img-5.jpg)'}}>
									<div class="desc">
										<div class="con">
											<h3><a href="work.html">Work 05</a></h3>
											<span>Graphic, Logo</span>
											<p class="icon">
												<span><a href="#"><i class="icon-share3"></i></a></span>
												<span><a href="#"><i class="icon-eye"></i> 100</a></span>
												<span><a href="#"><i class="icon-heart"></i> 49</a></span>
											</p>
										</div>
									</div>
								</div>
							</div>
							<div class="col-md-6 animate-box" data-animate-effect="fadeInRight">
								<div class="project" style={{backgroundImage: 'url(images/img-6.jpg)'}}>
									<div class="desc">
										<div class="con">
											<h3><a href="work.html">Work 06</a></h3>
											<span>Web Design</span>
											<p class="icon">
												<span><a href="#"><i class="icon-share3"></i></a></span>
												<span><a href="#"><i class="icon-eye"></i> 100</a></span>
												<span><a href="#"><i class="icon-heart"></i> 49</a></span>
											</p>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div class="row">
							<div class="col-md-12 animate-box">
								<p><a href="#" class="btn btn-primary btn-lg btn-load-more">Load more <i
											class="icon-reload"></i></a></p>
							</div>
						</div>
					</div>
				</section>
            </div>
        )
    }
}

export default Work;