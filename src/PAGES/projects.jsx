import React from "react";
import '../CSS/projects.css';
import thumb from '../assets/E-commerce .jpg'
import thumb1 from '../assets/react-project.jpg';
import thumb2 from '../assets/calculator-project.jpg';
import { Element } from "react-scroll";

const Projects = () => {

    return (
        <Element name="projects">
            <div id="project-container">
                <div className="project-header">
                    <p className="project-heading">&#60;projects&#62;</p>
                    <p className="project-quote"><i className="fa-solid fa-quote-left"></i>Facing challenges with strength, determination and confidence is what matters to me.</p>
                </div>

                <div className="project-content">
                    <div className="heading-container">
                        <p className="project-title">E-Commerce</p>
                        <p className="project-sub">As the lead developer for my inaugural full-stack project, I undertook the design and development of ecommerce website. My skills in both front-end and back-end technologies, I successfully implemented CRUD (Create, Read, Update, Delete) operations to user experience.</p>
                        <div className="lang-container">
                            <p className="skill-box">HTML</p>
                            <p className="skill-box">CSS</p>
                            <p className="skill-box">Bootstrap</p>
                            <p className="skill-box">JavaScript</p>
                            <p className="skill-box">React</p>
                            <p className="skill-box">React</p>
                            <p className="skill-box">Node JS</p>
                            <p className="skill-box">MongoDB</p>
                            
                        </div>

                        <div className="project-icons">
                            <i className="fa-brands fa-github"></i>
                            <i className="fa-solid fa-arrow-up-right-from-square"></i>
                        </div>
                    </div>

                    <div className="project-thumb">
                        <img src={thumb} alt="thumb" className="folio-thumb"></img>
                    </div>

                </div>

                <div className="project-content">
                    <div className="project-thumb">
                        <img src={thumb1} alt="thumb1" className="folio-thumb"></img>
                    </div>

                    <div className="heading-container">
                        <p className="project-title">Forms project</p>
                        <p className="project-sub">A form validation website that showcases my journey into the world of web development. Utilizing HTML, CSS, JavaScript and React, I've incorporated the fundamentals of web development into this project. The result is a dynamic and responsive website</p>
                        <div className="lang-container">
                            <p className="skill-box">HTML</p>
                            <p className="skill-box">CSS</p>
                            <p className="skill-box">Bootstrap</p>
                            <p className="skill-box">JavaScript</p>
                            <p className="skill-box">React</p>
                          
                        </div>

                        <div className="project-icons">
                           <a href="https://github.com/Abinex3/abinesh3.github.io" target="blank"><i className="fa-brands fa-github"></i></a>
                            <i className="fa-solid fa-arrow-up-right-from-square"></i>
                        </div>
                    </div>



                </div>

                <div className="project-content">
                    <div className="heading-container">
                        <p className="project-title">Calculator app</p>
                        <p className="project-sub">The primary goal of this project is to delve into the logic behind application development. While I had a grasp of design principles, I aimed to demystify the coding intricacies that make a functional app tick.Constructed using HTML, CSS, and JavaScript, this Calculator App showcases a blend of frontend technologies. JavaScript breathes life into the app with logical operations.</p>
                        <div className="lang-container">
                            <p className="skill-box">HTML</p>
                            <p className="skill-box">CSS</p>
                            <p className="skill-box">JavaScript</p>
                        </div>

                        <div className="project-icons">
                            <i className="fa-brands fa-github"></i>
                            <i className="fa-solid fa-arrow-up-right-from-square"></i>
                        </div>
                    </div>

                    <div className="project-thumb">
                        <img src={thumb2} alt="thumb2" className="folio-thumb"></img>
                    </div>

                </div>
{/* 
                <div className="more-project">
                    <Link to='/moreProject'><p>Show more&#62;&#62;</p></Link>
                </div> */}
            </div>
        </Element>
    )

}

export default Projects;