import React from "react";
import '../CSS/home.css';
// import { useEffect } from 'react';
import { Element, Link } from "react-scroll";

const Home = () => {

  // const carouselText = [
  //   { text: "Freelancer", color: "red" },
  //   { text: "UI Designer", color: "orange" },
  //   { text: "Fullstack Developer", color: "yellow" }
  // ];  

  // useEffect(() => {
  //   const featureTextRef = document.getElementById("feature-text");
  //   Home(carouselText, featureTextRef);

  //   return () => {

  //   };
  // }, []);

  // async function typeSentence(sentence, eleRef, delay = 100) {
  //   const letters = sentence.split("");
  //   let i = 0;
  //   while (i < letters.length) {
  //     await waitForMs(delay);
  //     eleRef.innerHTML += letters[i];
  //     i++;
  //   }
  //   return;
  // }

  // async function deleteSentence(eleRef) {
  //   const sentence = eleRef.innerHTML;
  //   const letters = sentence.split("");
  //   let i = 0;
  //   while (letters.length > 0) {
  //     await waitForMs(100);
  //     letters.pop();
  //     eleRef.innerHTML = letters.join("");
  //   }
  // }

  // async function Home(carouselList, eleRef) {
  //   let i = 0;
  //   while (true) {
  //     updateFontColor(eleRef, carouselList[i].color);
  //     await typeSentence(carouselList[i].text, eleRef);
  //     await waitForMs(1500);
  //     await deleteSentence(eleRef);
  //     await waitForMs(500);
  //     i++;
  //     if (i >= carouselList.length) { i = 0; }
  //   }
  // }

  // function updateFontColor(eleRef, color) {
  //   eleRef.style.color = color;
  // }

  // function waitForMs(ms) {
  //   return new Promise(resolve => setTimeout(resolve, ms));
  // }

  return (
    <Element name="home">
      <div id="home-container">
        <div className="home-content">
          <div className="home-greeting">
            <p className="greeting">Hello, World.</p>
          </div>

          <div className="home-name">
            <p className="home-myName">I'm Abinesh</p>
            <p className="name-desc">Expertise in building professional web applications!</p>
          </div>

          <div className="typing-container">
            <span id="sentence" className="sentence">And </span>
            <span id="feature-text"></span>
            <span className="input-cursor"></span>
          </div>

          <div class="btn-container">
            <div>
              <Link to="about" smooth={true} duration={500}><button className="btn" >ABOUT ME</button></Link>
            </div>
          </div>

          <div className="mouse-icon">
            <div className="wheel"></div>
          </div>
        </div>

        <div class="icon-container">
          <div class="home-icon">
            <a href="https://mail.google.com/mail/u/0/#inbox?compose=DmwnWtVcJkCwktkFnlWJBTrcJtqpxlVHZSJvrrpClkqBpXfMPgqxlVcXZwTwhhnjmNmrQxtsmsTG" target="_blank" rel="norefferrer" class="icon-link"><i class="fa-solid fa-envelope"></i></a>
            <a href="https://www.github.com/Abinex3" target="_blank" rel="norefferrer" className="icon-link"><i class="fa-brands fa-github"></i></a>
            <a href="https://www.instagram.com/abi_nexx/" target="_blank" rel="norefferrer" className="icon-link"><i class="fa-brands fa-instagram"></i></a>
            <a href="https://www.linkedin.com/in/abinesh30" target="_blank" rel="norefferrer" className="icon-link"><i class="fa-brands fa-linkedin"></i></a>
          </div>
        </div>

        <svg aria-label="Wave"className="wave-bottom" viewBox="0 0 1000 100" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none"><path fill="hsl(0, 100%, 100%)" opacity="0.22" d="M0 14C0 14 88.64 17.48 -820 50C560 90 814 77 1003 40L1015 68L1018 104H0V14Z"></path><path fill="hsl(0, 100%, 100%)" opacity="0.20" d="M0 45C0 45 271 90.13 500 77C657 68 830 30 1015 14V100H0V45Z"></path><path fill="hsl(0, 100%, 100%)" opacity="1" d="M0 58C0 58 188.29 90 508 90C798 90 1002 55 1002 55V100H0V58Z"></path></svg>
      </div>
    </Element>
  );
}

export default Home;