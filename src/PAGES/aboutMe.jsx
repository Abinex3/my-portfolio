import React from "react";
import '../CSS/aboutMe.css';
import clge from '../assets/clg-logo.png';
import pg from '../assets/srm-pg.png';
import { Link, Element } from "react-scroll";

const Aboutme = () => {
    return (
        <Element name="about">
            <div id="about-container">

                <div className="about-header">
                    <div className="about-name">
                        <p className="about">&#60;about me&#62;</p>
                        <p className="about-myself">Let me introduce myself</p>
                        <p className="about-role"><i class="fa-solid fa-quote-left"></i> Embrace the journey, cherish the moments, and live with purpose.</p>
                    </div>
                </div>

                <div className="details">
                    <div className="profile">
                        <p className="about-heading">Profile</p>
                        <p className="about-details">Motivated junior web developer looking for a role as full-stack web developer. I am a comprehensive skill set in both frontend and backend technologies. My passion for creating robust and scalable web applications is fueled by a commitment to staying at the forefront of technological advancements.</p>
                        <div className="about-flex-wrap">
                            <div>
                                <p className="about-heading">Name</p>
                                <p className="about-details">Abinesh M</p>
                            </div>
                            <div>
                                <p className="about-heading">Phone</p>
                                <p className="about-details">+91 9489662785</p>
                            </div>

                        </div>
                        <div className="about-flex-wrap">
                            <div>
                                <p className="about-heading">Email</p>
                                <p className="about-details">abineshmuniyasaamy@gmail.com</p>
                            </div>
                        </div>
                    </div>

                    <div className="education">
                        <p className="about-heading">Education</p>

                        <div className="education-container">
                            <div className="ug">
                                <p className="degree">M.Sc. Information Technology<p className="degree-year">July 2023 - PRESENT</p></p>
                            </div>

                            <div className="clge">
                                <div className="clge-flex">
                                    <img src={pg} alt="pg" className="clge-logo"></img>
                                    <p className="clge-name">SRM Institute of Science and Technology <p className="clge-location">Chennai, Tamil Nadu</p></p>
                                </div>
                            </div>
                        </div>

                        <div className="education-container">
                            <div className="ug">

                                <p className="degree">Bachelor of Information Technology<p className="degree-year">July 2020 - May 2023</p></p>
                            </div>

                            <div className="clge">
                                <div className="clge-flex">
                                    <img src={clge} alt="ug" className="clge-logo"></img>
                                    <p className="clge-name">Karpagam Academy of Higher Education <p className="clge-location">Coimbatore, Tamil Nadu</p></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="about-buttons">
                    <div className="hire-button">
                        <Link to="contact" smooth={true} duration={1000} offset={100}><button className="about-hireMe">HIRE ME</button></Link>
                    </div>

                    <div className="cv-button">
                        <button className="about-cvButton">DOWNLOAD CV</button>
                    </div>

                </div>
            </div>
        </Element >
    )

}

export default Aboutme;