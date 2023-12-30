import React from "react";
import { useState } from 'react';
import { Link } from "react-scroll";
import '../CSS/navbar.css';
// import logo from '../assets/diversity-concept-with-hands.jpg';
const Navbar = () => {
    // const [showNav, setShowNav] = React.useState(false);

    // const [isActive, setIsActive] = useState(false);

    const [ show, setShow ] = useState(false)

    const hideNav = () => {
        if(window.scrollY >= 680){
            setShow(true)
        } else {
            setShow(false)
        }
    }

    window.addEventListener('scroll',hideNav)


    const [ navDefault, navClrChange ] = useState(false)

    const backgorundChange = () => {
        if(window.scrollY >= 1500){
            navClrChange(true)
        } else {
            navClrChange(false)
        }
    }

    window.addEventListener('scroll',backgorundChange)

    return (
        <div className={show ? "nav-show" : "nav-hide"} id="nav-container"> 
            {/* <img src={logo} className="logo"></img> */}

            <nav className={navDefault ? ".nav-show" : ".nav-2"} id="nav">

                <div className="logo-border">
                    <p className="logo-name">
                    <svg className="logo" fill="none" height="100" viewBox="0 0 32 32" width="150px" xmlns="http://www.w3.org/2000/svg"><rect fill="var(--secondary)" height="100%" rx="16" width="100%"></rect><path clipRule="evenodd" d="M17.6482 10.1305L15.8785 7.02583L7.02979 22.5499H10.5278L17.6482 10.1305ZM19.8798 14.0457L18.11 17.1983L19.394 19.4511H16.8453L15.1056 22.5499H24.7272L19.8798 14.0457Z" fill="currentColor" fillRule="evenodd"></path></svg>
                    </p>
                </div>

                <div className="hover li-hover">
                    <ul className="active-">
                        <li><Link to="home" smooth={true} duration={100} className="hover-effect">Home</Link></li>
                        <li><Link to="about" smooth={true} duration={500} className="hover-effect">About</Link></li>
                        <li><Link to="resume" smooth={true} duration={500} className="hover-effect">Resume</Link></li>
                        <li><Link to="skills" smooth={true} duration={500} className="hover-effect">Skills</Link></li>
                        <li><Link to="projects" smooth={true} duration={500} className="hover-effect">Projects</Link></li>
                        <li><Link to="services" smooth={true} duration={500} className="hover-effect">Services</Link></li>
                        <li><Link to="contact" smooth={true} duration={500} className="list-contact">Contact</Link></li>
                    </ul>
                </div>
            </nav>
        </div>
    );
}

export default Navbar;
