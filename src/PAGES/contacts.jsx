import React from "react";
import '../CSS/contacts.css';
import { Element } from "react-scroll";

const Contacts = () => {

    return (
        <Element name="contact">
            <div id="contact-container">
                <div className="contact-header">
                    <p className="contact-heading">&#60;contact me&#62;</p>
                    <p className="contact-quote">I'd Love To Hear From You.</p>
                    <p className="contact-skill">Looking for a professional web developer to build your next website? Let's talk and contact me today!</p>
                </div>

                <form className="contact-content">
                    <div className="details-one">
                        <div className="contact-details">

                            <div className="form">
                                <input type="text" name="text" autoComplete="off" required />
                                <label htmlFor="text" className="label-name">
                                    <span className="content-name">
                                        Name
                                    </span>
                                </label>
                            </div>
                        </div>

                        <div className="contact-details">
                            <div className="form">
                                <input type="text" name="text" autoComplete="off" required />
                                <label htmlFor="text" className="label-name">
                                    <span className="content-name">
                                        Email
                                    </span>
                                </label>
                            </div>
                        </div>

                        <div className="contact-details">
                            <div className="form">
                                <input type="text" name="text" autoComplete="off" required />
                                <label htmlFor="text" className="label-name">
                                    <span className="content-name">
                                        Subject
                                    </span>

                                </label>
                            </div>
                        </div>

                        <div className="contact-details">
                            <div className="form">
                                <input type="text" name="text" autoComplete="off" required />
                                <label htmlFor="text" className="label-name">
                                    <span className="content-name">
                                        Messages
                                    </span>
                                </label>
                            </div>
                        </div>

                        <div className="contact-details">
                            <div className="form">
                                <div className="btn-contact">
                                    <div>
                                        <button className="btn-submit" >SUBMIT</button>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </form>
            </div>
        </Element>
    )
}

export default Contacts;