import React, { Component } from 'react';

class Sidebar extends Component {
    render() {
        return (
            <div>
                <nav href="#navbar" className="js-colorlib-nav-toggle colorlib-nav-toggle" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar"><i /></nav>
                <aside id="colorlib-aside" className="border js-fullheight">
                    <div className="text-center">
                        <div className="author-img" style={{ backgroundImage: 'url(assets/images/roy.png)' }}></div>
                        <h1 id="colorlib-logo"><a href={`${process.env.PUBLIC_URL}`}>Roy Andri</a></h1>
                        <span className="position"><a href={`${process.env.PUBLIC_URL}`}>WEB DEVELOPER</a> in Indonesia</span>
                    </div>
                    <nav id="colorlib-main-menu" role="navigation" className="navbar">
                        <div id="navbar" className="collapse">
                            <ul id="menu-content">
                                <li className="active"><a href="/#" data-nav-section="home">Home</a></li>
                                <li><a href="/#" data-nav-section="about">About</a></li>
                                <li><a href="/#" data-nav-section="services">Services</a></li>
                                <li><a href="/#" data-nav-section="skills">Skills</a></li>
                                <li><a href="/#" data-nav-section="education">Education</a></li>
                                <li><a href="/#" data-nav-section="experience">Experience</a></li>
                                <li><a href="/#" data-nav-section="work">Work</a></li>
                                {/* <li><a href="/#" data-nav-section="blog">Blog</a></li> */}
                                <li><a href="/#" data-nav-section="contact">Contact</a></li>
                            </ul>
                            <div id="colorlib-footer" style={{ marginTop: '20px' }} className="colorlib-footer">
                                <p>
                                    <small>
                                        &copy;{new Date().getFullYear()} All rights reserved | Made with <i className="icon-heart" aria-hidden="true"> </i> using <a href="https://reactjs.org/" target="_blank" rel="noopener noreferrer">React</a>
                                    </small>
                                </p>
                                <ul style={{ marginTop: '-15px' }}>
                                    <li><a className="external" href="https://facebook.com/royandri0/" target="_blank" rel="noopener noreferrer"><i className="icon-facebook2"></i></a></li>&nbsp;&nbsp;
                                    <li><a className="external" href="https://github.com/royandri/" target="_blank" rel="noopener noreferrer"><i className="icon-github"></i></a></li>&nbsp;&nbsp;
                                    <li><a className="external" href="https://www.instagram.com/roy_andri/" target="_blank" rel="noopener noreferrer"><i className="icon-instagram" ></i></a></li>&nbsp;&nbsp;
                                    <li><a className="external" href="https://www.linkedin.com/in/roy-andri-52b10a183/" target="_blank" rel="noopener noreferrer"><i className="icon-linkedin2"></i></a></li>&nbsp;&nbsp;
                                </ul>
                            </div>
                        </div>
                    </nav>
                </aside>
            </div >
        )
    }
}

export default Sidebar;
