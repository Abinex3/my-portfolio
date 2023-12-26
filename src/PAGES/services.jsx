import React from "react";
import '../CSS/services.css';
import design from '../assets/web-design.png';
import dev from '../assets/web-develpment.png';
import UI from '../assets/layers.png';
import { Element } from "react-scroll";

const Services = () => {
    return (
        <Element name="services">
            <div id="service-container">
                <div className="service-header">
                    <p className="service-heading">&#60;Services&#62;</p>
                    <p className="service-quote"><i className="fa-solid fa-quote-left"></i>Throw me to the wolves and I will return leading the pack.</p>
                </div>

                <div className="my-services">
                    <div className="container">
                        <div className="card">
                                <div className="content">
                                    <img src={UI} alt="ui" className="ui"></img>
                                    <h3 className="ser-title">UI Design</h3>
                                    <p className="ser-sub"> As a UI designer focused on creating user-friendly interfaces, my primary goal is to enhance the overall user experience by designing intuitive and visually appealing interfaces.</p>
                                </div>

                                <div className="content">
                                    <img src={dev} alt="dev" className="ui"></img>
                                    <h3 className="ser-title">Web Development</h3>
                                    <p className="ser-sub"> Web developer focusing on full-stack development, my role involves creating dynamic and responsive websites that not only look visually appealing but also function seamlessly.</p>
                                </div>

                                <div className="content">
                                    <img src={design} alt="design" className="ui"></img>
                                    <h3 className="ser-title">Responsive Design</h3>
                                    <p className="ser-sub">As a web developer specializing in responsive design, my primary focus is on creating websites that provide an optimal user experience across a variety of devices and screen sizes.</p>
                                </div>
                            </div>
                        </div>
                    </div>
        </div>
        </Element >
    )
}

export default Services;