import React from "react";
import '../CSS/projects.css';
import thumb from '../assets/portfolioProject.jpg';
import thumb1 from '../assets/react-project.jpg';
import thumb2 from '../assets/calculator-project.jpg';
import { Element } from "react-scroll";

const Projects = () => {

    return (
        <Element name="projects">
            <div id="project-container">
                <div className="project-header">
                    <p className="project-heading">&#60;projects&#62;</p>
                    <p className="project-quote"><i class="fa-solid fa-quote-left"></i>Facing challenges with strength, determination and confidence is what matters to me.</p>
                </div>

                <div className="project-content">
                    <div className="heading-container">
                        <p className="project-title">E-Commerce</p>
                        <p className="project-sub">Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis autem voluptates reiciendis cum quidem ipsam quibusdam nemo distinctio cumque iusto. Itaque, error. Sequi cum aperiam magnam amet, eum consequuntur necessitatibus?</p>
                        <div className="lang-container">
                            <p className="skill-box">HTML</p>
                            <p className="skill-box">CSS</p>
                            <p className="skill-box">JavaScript</p>
                            <p className="skill-box">React</p>
                            <p className="skill-box">Bootstrap</p>
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
                        <p className="project-sub">Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis autem voluptates reiciendis cum quidem ipsam quibusdam nemo distinctio cumque iusto. Itaque, error. Sequi cum aperiam magnam amet, eum consequuntur necessitatibus?</p>
                        <div className="lang-container">
                            <p className="skill-box">HTML</p>
                            <p className="skill-box">CSS</p>
                            <p className="skill-box">JavaScript</p>
                            <p className="skill-box">React</p>
                            <p className="skill-box">Bootstrap</p>
                        </div>

                        <div className="project-icons">
                            <i className="fa-brands fa-github"></i>
                            <i className="fa-solid fa-arrow-up-right-from-square"></i>
                        </div>
                    </div>



                </div>

                <div className="project-content">
                    <div className="heading-container">
                        <p className="project-title">Calculator app</p>
                        <p className="project-sub">Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis autem voluptates reiciendis cum quidem ipsam quibusdam nemo distinctio cumque iusto. Itaque, error. Sequi cum aperiam magnam amet, eum consequuntur necessitatibus?</p>
                        <div className="lang-container">
                            <p className="skill-box">HTML</p>
                            <p className="skill-box">CSS</p>
                            <p className="skill-box">JavaScript</p>
                        </div>

                        <div className="project-icons">
                            <i class="fa-brands fa-github"></i>
                            <i class="fa-solid fa-arrow-up-right-from-square"></i>
                        </div>
                    </div>

                    <div className="project-thumb">
                        <img src={thumb2} alt="thumb2" className="folio-thumb"></img>
                    </div>

                </div>

                <div className="more-project">
                    <a href="/projet-collections">Show more&#62;&#62;</a>
                </div>
            </div>
        </Element>
    )

}

export default Projects;