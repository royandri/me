import React, { Component } from 'react';

// Component
import Sidebar from './base/Sidebar';
import Header from './pages/Header';
import About from './pages/About';
import Services from './pages/Services';
import Splash from './pages/Splash';
import Skills from './pages/Skills';
import Education from './pages/Education';
import Experience from './pages/Experience';
import Work from './pages/Work';
import Blog from './pages/Blog';
import Contact from './pages/Contact';


class Home extends Component {
    render() {
        return (
            <div id="colorlib-page">
                {/* <div className="container-wrap"> */}
                {/* sidebar */}
                <Sidebar></Sidebar>

                {/* content */}
                <div id="colorlib-main">
                    <Header></Header>
                    <About></About>
                    <Services></Services>

                    <Splash></Splash>

                    <Skills></Skills>
                    <Education></Education>
                    <Experience></Experience>
                    <Work></Work>
                    <Blog></Blog>
                    <Contact></Contact>

                </div>

                {/* </div> */}
            </div>
        );
    }
}

export default Home;