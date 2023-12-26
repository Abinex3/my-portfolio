import React from "react";
import '../CSS/footer.css';

const Footer = () => {
    return (
        <div id="footer-container">
            <div className="address">
                <p className="footer-logo">AbineshDev</p>
            <div className="footer-navLink">
                <li className="home-link-">Home  </li>
                <li className="home-link-">Projects</li>
            </div>
            </div>
            <hr/>

            <div className="footer-address">
                <p className="contact">Contact :</p>
                <p className="contact">Phone : +91 9489662785</p>
                <p className="contact">Mail : abineshmuniyasaamy@gmail.com</p>
            </div>

            <div className="footer-logo">
            <a href="https://mail.google.com/mail/u/0/#inbox?compose=DmwnWtVcJkCwktkFnlWJBTrcJtqpxlVHZSJvrrpClkqBpXfMPgqxlVcXZwTwhhnjmNmrQxtsmsTG" target="_blank" rel="mail1" class="footer-icon"><i class="fa-solid fa-envelope"></i></a>
            <a href="https://www.github.com/Abinex3" target="_blank" rel="git1" class="footer-icon"><i class="fa-brands fa-github"></i></a>
            <a href="https://www.instagram.com/abi_nexx/" target="_blank" rel="insta1" class="footer-icon"><i class="fa-brands fa-instagram"></i></a>
            <a href="https://www.linkedin.com/in/abinesh30" target="_blank"  rel="link1" class="footer-icon"><i class="fa-brands fa-linkedin"></i></a>
            </div>

            <div className="footer-name">
                <p className="footer-des">Designed by Abinesh</p>
            </div>
        </div>
    )
}

export default Footer;