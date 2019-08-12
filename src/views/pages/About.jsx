import React, { Component } from "react";

class About extends Component {
    render() {
        return (
            <div>
                <section className="colorlib-about" data-section="about">
                    <div className="colorlib-narrow-content">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="row row-bottom-padded-sm animate-box" data-animate-effect="fadeInLeft">
                                    <div className="col-md-12">
                                        <div className="about-desc">
                                            <span className="heading-meta">About Us</span>
                                            <h2 className="colorlib-heading">Who Am I?</h2>
                                            <p>
                                                <strong>Hi I'm Roy Andri    </strong>
                                                a hardworking and ambitious individual with a great passion for the IT industry.
                                                I am a fresh graduate of the University of Technology Yogyakarta, majoring in Informatics and Engineering.
                                                I have good comunication skills, enabling me to effectively comunicate with a wide range of people.
                                                I am seeing a position in the industry in which  i can put  into practice my knowledge and experience,
                                                ultimately, benefiting the operations of the organisation that i work for.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-3 animate-box" data-animate-effect="fadeInLeft">
                                        <div className="services color-1">
                                            <span className="icon2">
                                                <i className="icon-bulb" />
                                            </span>
                                            <h3>Graphic Design</h3>
                                        </div>
                                    </div>
                                    <div className="col-md-3 animate-box" data-animate-effect="fadeInRight">
                                        <div className="services color-2">
                                            <span className="icon2">
                                                <i className="icon-globe-outline" />
                                            </span>
                                            <h3>Web Design</h3>
                                        </div>
                                    </div>
                                    <div className="col-md-3 animate-box" data-animate-effect="fadeInTop">
                                        <div className="services color-3">
                                            <span className="icon2">
                                                <i className="icon-data" />
                                            </span>
                                            <h3>Software</h3>
                                        </div>
                                    </div>
                                    <div className="col-md-3 animate-box" data-animate-effect="fadeInBottom">
                                        <div className="services color-4">
                                            <span className="icon2">
                                                <i className="icon-phone3" />
                                            </span>
                                            <h3>Application</h3>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-12 animate-box" data-animate-effect="fadeInLeft">
                                        <div className="hire">
                                            <h2>
                                                I am happy to know you <br />that 300+ projects done
                                                sucessfully!
                                            </h2>
                                            <a href="/#" className="btn-hire">
                                                Hire me
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        );
    }
}

export default About;
