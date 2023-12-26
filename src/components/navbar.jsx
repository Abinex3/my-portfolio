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

                <div>
                    <p className="logo-name">
                    <svg class="logo" fill="none" height="36" viewBox="0 0 32 32" width="150px" xmlns="http://www.w3.org/2000/svg"><rect fill="var(--secondary)" height="100%" rx="16" width="100%"></rect><path clip-rule="evenodd" d="M17.6482 10.1305L15.8785 7.02583L7.02979 22.5499H10.5278L17.6482 10.1305ZM19.8798 14.0457L18.11 17.1983L19.394 19.4511H16.8453L15.1056 22.5499H24.7272L19.8798 14.0457Z" fill="currentColor" fill-rule="evenodd"></path></svg>
                    </p>
                </div>

                <div className="hover li-hover">
                    <ul className="active-">
                        <li><Link to="home" smooth={true} duration={100} className="hover-effect">Home</Link></li>
                        <li><Link to="about" smooth={true} duration={500} className="hover-effect">About</Link></li>
                        <li><Link to="resume" smooth={true} duration={500} className="hover-effect">Resume</Link></li>
                        <li><Link to="skills" smooth={true} duration={500} className="hover-effect">Skills</Link></li>
                        <li><Link to="project" smooth={true} duration={500} className="hover-effect">Projects</Link></li>
                        <li><Link to="services" smooth={true} duration={500} className="hover-effect">Services</Link></li>
                        <li><Link to="contact" smooth={true} duration={500} className="list-contact">Contact</Link></li>
                    </ul>

                    {/* <button onClick={() => setShowNav(!showNav)} className="menu-button">
                         <i class="fa-solid fa-bars"></i> 
                        <svg className="hb" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 10 10" stroke="#eee" stroke-width=".6" fill="rgba(0,0,0,0)" stroke-linecap="round">
  <path d="M2,3L5,3L8,3M2,5L8,5M2,7L5,7L8,7">
    <animate dur="0.2s" attributeName="d" values="M2,3L5,3L8,3M2,5L8,5M2,7L5,7L8,7;M3,3L5,5L7,3M5,5L5,5M3,7L5,5L7,7" fill="freeze" begin="start.begin" />
    <animate dur="0.2s" attributeName="d" values="M3,3L5,5L7,3M5,5L5,5M3,7L5,5L7,7;M2,3L5,3L8,3M2,5L8,5M2,7L5,7L8,7" fill="freeze" begin="reverse.begin" />
  </path>
  <rect width="10" height="10" stroke="none">
    <animate dur="2s" id="reverse" attributeName="width" begin="click" />
  </rect>
  <rect width="10" height="10" stroke="none">
    <animate dur="0.001s" id="start" attributeName="width" values="10;0" fill="freeze" begin="click" />
    <animate dur="0.001s" attributeName="width" values="0;10" fill="freeze" begin="reverse.begin" />
  </rect>
</svg>    */}
                    {/* </button> */}
                </div>
            </nav>
        </div>
    );
}

export default Navbar;
