import React from "react";
import '../CSS/skills.css';
import html from '../assets/html.svg';
import css from '../assets/css.svg';
import js from '../assets/javascript.svg';
import md from '../assets/mongodb.svg';
import ex from '../assets/express-js-icon.svg';
import git from '../assets/git.svg';
import node from '../assets/nodejs.svg';
import react from '../assets/react.svg';
import redux from '../assets/redux.svg';
import wae from '../assets/wave.png';
import bootstrap from '../assets/bootstrap.svg';
import { Element } from "react-scroll";

const Skills = () => {
    return (
        <Element name="skills">
        <div id="skills-container">
            <div className="skill-header">
                <p className="skill-title">&#60;skills&#62;</p>
                <p className="about-skill"><i class="fa-solid fa-quote-left"></i>Web development is difficult, only when you set your starndard is it fun to do.</p>
            </div>

            <div className="svg-container">
            <div className="skill-svg">
                <div className="skill-html">
                    <img src={html} alt="html" className="skill-logo"></img>
                </div>

                <div className="skills">
                    <div className="skill">
                        <p className="skill-lang">HTML</p>
                        <div className="skill-bar">
                            <div className="skill-per" per="95%" style={{ "max-width": "95%" }}></div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="skill-svg">
                <div className="skill-html">
                    <img src={css} alt="css" className="skill-logo"></img>
                </div>

                <div className="skills">
                    <div className="skill">
                        <p className="skill-lang">CSS</p>
                        <div className="skill-bar">
                            <div className="skill-per" per="90%" style={{ "max-width": "90%" }}></div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="skill-svg">
                <div className="skill-html">
                    <img src={bootstrap} alt="boots" className="skill-logo"></img>
                </div>

                <div className="skills">
                    <div className="skill">
                        <p className="skill-lang">BOOTSTRAP</p>
                        <div className="skill-bar">
                            <div className="skill-per" per="80%" style={{ "max-width": "80%" }}></div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="skill-svg">
                <div className="skill-html">
                    <img src={js}  alt="js" className="skill-logo"></img>
                </div>

                <div className="skills">
                    <div className="skill">
                        <p className="skill-lang">JAVASCRIPT</p>
                        <div className="skill-bar">
                            <div className="skill-per" per="65%" style={{ "max-width": "65%" }}></div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="skill-svg">
                <div className="skill-html">
                    <img src={react} alt="react" className="skill-logo"></img>
                </div>

                <div className="skills">
                    <div className="skill">
                        <p className="skill-lang">REACT</p>
                        <div className="skill-bar">
                            <div className="skill-per" per="73%" style={{ "max-width": "73%" }}></div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="skill-svg">
                <div className="skill-html">
                    <img src={redux} alt="redux" className="skill-logo"></img>
                </div>

                <div className="skills">
                    <div className="skill">
                        <p className="skill-lang">REDUX</p>
                        <div className="skill-bar">
                            <div className="skill-per" per="60%" style={{ "max-width": "60%" }}></div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="skill-svg">
                <div className="skill-html">
                    <img src={node} alt="node" className="skill-logo"></img>
                </div>

                <div className="skills">
                    <div className="skill">
                        <p className="skill-lang">NODE JS</p>
                        <div className="skill-bar">
                            <div className="skill-per" per="80%" style={{ "max-width": "80%" }}></div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="skill-svg">
                <div className="skill-html">
                    <img src={md} alt="md" className="skill-logo"></img>
                </div>

                <div className="skills">
                    <div className="skill">
                        <p className="skill-lang">MDB</p>
                        <div className="skill-bar">
                            <div className="skill-per" per="95%" style={{ "max-width": "95%" }}></div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="skill-svg">
                <div className="skill-html">
                    <img src={git} alt="git" className="skill-logo"></img>
                </div>

                <div className="skills">
                    <div className="skill">
                        <p className="skill-lang">GIT</p>
                        <div className="skill-bar">
                            <div className="skill-per" per="90%" style={{ "max-width": "90%" }}></div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="skill-svg">
                <div className="skill-html">
                    <img src={ex} alt="ex" className="skill-logo"></img>
                </div>

                <div className="skills">
                    <div className="skill">
                        <p className="skill-lang">EXPRESS</p>
                        <div className="skill-bar">
                            <div className="skill-per" per="84%" style={{ "max-width": "84%" }}></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

      
         </div>
         </Element>
    )
}

export default Skills;