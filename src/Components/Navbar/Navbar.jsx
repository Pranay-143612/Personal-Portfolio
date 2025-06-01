import React, { useState, useEffect } from 'react';
import './navbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faCircleXmark } from '@fortawesome/free-solid-svg-icons';
import Home from '../Home/Home';
import About from '../About Me/About';
import Skills from '../Skills/Skills';
import Experience from '../Experience/Experience';
import Projects from '../Projects/Projects';
import Education from '../Education/Education';
import Certifications from '../Certifications/Certifications';
import Contact from '../Contact/Contact';
import Footer from '../Footer/Footer';

function Navbar() {
    const [sidebarVisible, setSidebarVisible] = useState(false);

    const showSidebar = () => setSidebarVisible(true);
    const closeSidebar = () => setSidebarVisible(false);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth > 800 && sidebarVisible) {
                setSidebarVisible(false);
            }
        };
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, [sidebarVisible]);

    useEffect(() => {
        document.body.style.overflow = sidebarVisible ? 'hidden' : 'auto';
    }, [sidebarVisible]);

    return (
        <>
            <div className='navbar'>
                <nav>
                    <ul className='original'>
                        <li className='header'><h1>Pranay</h1></li>
                        <li className='hideOnMobile'><a className='line' href="#home">Home</a></li>
                        <li className='hideOnMobile'><a className='line' href="#about">About Me</a></li>
                        <li className='hideOnMobile'><a className='line' href="#skills">Skills</a></li>
                        <li className='hideOnMobile'><a className='line' href="#experience">Experience</a></li>
                        <li className='hideOnMobile'><a className='line' href="#projects">Projects</a></li>
                        <li className='hideOnMobile'><a className='line' href="#education">Education</a></li>
                        <li className='hideOnMobile'><a className='line' href="#certifications">Certifications</a></li>
                        <li className='hideOnMobile'><a className='line' href="#contact">Contact Me</a></li>
                        <li className='menuBtn' onClick={showSidebar}>
                            <FontAwesomeIcon icon={faBars} />
                        </li>
                    </ul>

                    {sidebarVisible && (
                        <>
                            <div className="overlay" onClick={closeSidebar}></div>
                            <ul className='sidebar'>
                                <li className='cross' onClick={closeSidebar}><FontAwesomeIcon icon={faCircleXmark} /></li>
                                <li><a href="#home" onClick={closeSidebar}>Home</a></li>
                                <li><a href="#about" onClick={closeSidebar}>About Me</a></li>
                                <li><a href="#skills" onClick={closeSidebar}>Skills</a></li>
                                <li><a href="#experience" onClick={closeSidebar}>Experience</a></li>
                                <li><a href="#projects" onClick={closeSidebar}>Projects</a></li>
                                <li><a href="#education" onClick={closeSidebar}>Education</a></li>
                                <li><a href="#certifications" onClick={closeSidebar}>Certifications</a></li>
                                <li><a href="#contact" onClick={closeSidebar}>Contact Me</a></li>
                            </ul>
                        </>
                    )}
                </nav>
            </div>
            <div id="home"><Home /></div>
            <div id="about"><About /></div>
            <div id="skills"><Skills /></div>
            <div id="experience"><Experience /></div>
            <div id="projects"><Projects /></div>
            <div id="education"><Education /></div>
            <div id="certifications"><Certifications /></div>
            <div id="contact"><Contact /></div>
            <Footer />
        </>
    );
}

export default Navbar;
