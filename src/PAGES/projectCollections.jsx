import React from "react";
import '../CSS/projectCollections.css';
// import { Element } from "react-scroll";


const projectCollections = () => {

    return (
        // <Element name = "collections">
        <div id="collection-container">
        <div class="inside-title">
            <p class="inside-project">My projects</p>
            <p class="inside-sub">Since I've been creating projects for a while now, there are a lot of them. I decided to put some of my favourite ones here.
                If you are interested in seeing all my projects then please consider following me on github.</p>
        </div>

        <div class="inside-buttons">
            <button class="selectButton">all</button>
            <button class="selectButton">html & css</button>
            <button class="selectButton">javascript</button>
            <button class="selectButton">react</button>
            <button class="selectButton">node js</button>
        </div>

        <div class="inside-thumb">
            <div class="nav-pic">
            <img src="bg-nav.jpg"/>
            <p class="nav-title">Animation page</p>
            </div>
        </div>
    </div>
        //  </Element>
    )

}

export default projectCollections;