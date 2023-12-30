import React from "react";
import '../CSS/footer.css';

const Footer = () => {
    return (
        <div id="footer-container">
            <div className="address">
                <p className="footer-logo">AbineshDev</p>
                <div className="footer-logo">
            <a href="https://mail.google.com/mail/u/0/#inbox?compose=DmwnWtVcJkCwktkFnlWJBTrcJtqpxlVHZSJvrrpClkqBpXfMPgqxlVcXZwTwhhnjmNmrQxtsmsTG" target="_blank" rel="norefferrer" className="footer-icon"><i className="fa-solid fa-envelope"></i></a>
            <a href="https://www.github.com/Abinex3" target="_blank" rel="norefferrer" className="footer-icon"><i className="fa-brands fa-github"></i></a>
            <a href="https://www.instagram.com/abi_nexx/" target="_blank" rel="norefferrer" className="footer-icon"><i className="fa-brands fa-instagram"></i></a>
            <a href="https://www.linkedin.com/in/abinesh30" target="_blank"  rel="norefferrer" className="footer-icon"><i className="fa-brands fa-linkedin"></i></a>
            </div>
            </div>
            <hr/>

            <div className="footer-address">
                <p className="contact">Contact :</p>
                <p className="contact">Phone : +91 9489662785</p>
                <p className="contact">Mail : abineshmuniyasaamy@gmail.com</p>
            </div>

           

            <div className="footer-name">
                <p className="footer-des">Designed by &#10084;&#65039; Abinesh</p>
            </div>
        </div>
    )
}

export default Footer;