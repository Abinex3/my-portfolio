import React from "react";
import '../CSS/aboutMe.css';
// import resume from '/Abinesh-resume.pdf
import { Element } from "react-scroll";

const Aboutme = () => {
    return (
        <Element name="about">
            <div id="about-container">

                <div className="about-header">
                    <div className="about-name">
                        <p className="about">&#60;about me&#62;</p>
                        <p className="about-myself">Let me introduce myself</p>
                        <p className="about-role"><i className="fa-solid fa-quote-left"></i> Embrace the journey, cherish the moments, and live with purpose.</p>
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
                                <p className="degree">M.Sc. Information Technology<span className="degree-year">July 2023 - PRESENT</span></p>
                            </div>

                            <div className="clge">
                                <div className="clge-flex">
                                    <p className="clge-name">SRM Institute of Science and Technology <span className="clge-location">Chennai, Tamil Nadu</span></p>
                                </div>
                            </div>
                        </div>

                        <div className="education-container">
                            <div className="ug">

                                <p className="degree">Bachelor of Information Technology<span className="degree-year">July 2020 - May 2023</span></p>
                            </div>

                            <div className="clge">
                                <div className="clge-flex">
                                    <p className="clge-name">Karpagam Academy of Higher Education <span className="clge-location">Coimbatore, Tamil Nadu</span></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="about-buttons">
                    <div className="cv-button">
                        <a href="/Abinesh-resume.pdf" target="_blank"><button className="about-cvButton">DOWNLOAD CV</button></a>
                    </div>

                </div>
            </div>
        </Element >
    )

}

export default Aboutme;