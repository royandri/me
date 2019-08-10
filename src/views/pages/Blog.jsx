import React, { Component } from 'react'

class Blog extends Component {
  render() {
	  return (
		<div>
			<section class="colorlib-blog" data-section="blog">
					<div class="colorlib-narrow-content">
						<div class="row">
							<div class="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
								<span class="heading-meta">Read</span>
								<h2 class="colorlib-heading">Recent Blog</h2>
							</div>
						</div>
						<div class="row">
							<div class="col-md-4 col-sm-6 animate-box" data-animate-effect="fadeInLeft">
								<div class="blog-entry">
									<a href="blog.html" class="blog-img"> <img src="images/blog-1.jpg" class="img-responsive" alt="HTML5 Bootstrap Template by colorlib.com"></img></a>
									<div class="desc">
										<span>
											<small>April 14, 2018 </small> | <small> Web Design </small> | <small> <i class="icon-bubble3"></i> 4</small>
											</span>
										<h3><a href="blog.html">Renovating National Gallery</a></h3>
										<p>
											Separated they live in Bookmarksgrove right at the coast of the Semantics, a
											large language ocean.
										</p>
									</div>
								</div>
							</div>
							<div class="col-md-4 col-sm-6 animate-box" data-animate-effect="fadeInRight">
								<div class="blog-entry">
									<a href="blog.html" class="blog-img"><img src="images/blog-2.jpg" class="img-responsive" alt="HTML5 Bootstrap Template by colorlib.com"></img></a>
									<div class="desc">
										<span><small>April 14, 2018 </small> | <small> Web Design </small> | <small> <i class="icon-bubble3"></i> 4</small></span>
										<h3><a href="blog.html">Wordpress for a Beginner</a></h3>
										<p>
											Separated they live in Bookmarksgrove right at the coast of the Semantics, a
											large language ocean.
										</p>
									</div>
								</div>
							</div>
							<div class="col-md-4 col-sm-6 animate-box" data-animate-effect="fadeInLeft">
								<div class="blog-entry">
									<a href="blog.html" class="blog-img"><img src="images/blog-3.jpg" class="img-responsive" alt="HTML5 Bootstrap Template by colorlib.com"></img></a>
									<div class="desc">
										<span>
											<small>April 14, 2018 </small> | <small> Inspiration </small> | <small> <i class="icon-bubble3"></i> 4</small>
										</span>
										<h3><a href="blog.html">Make website from scratch</a></h3>
										<p>
											Separated they live in Bookmarksgrove right at the coast of the Semantics, a
											large language ocean.
										</p>
									</div>
								</div>
							</div>
						</div>
						<div class="row">
							<div class="col-md-12 animate-box">
								<p>
									<a href="#" class="btn btn-primary btn-lg btn-load-more">Load more <i class="icon-reload"></i></a>
								</p>
							</div>
						</div>
					</div>
				</section>
		</div>
		)
	}
}

export default Blog;
