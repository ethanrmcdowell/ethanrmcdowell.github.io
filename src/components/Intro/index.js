import React from "react";
import "./style.css";
import ScrollReveal from "scrollreveal";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

window.onload = function(){
    ScrollReveal().reveal(".head-one", {delay: 600});
    ScrollReveal().reveal(".head-two", {delay: 1200});
    ScrollReveal().reveal(".about-text", {delay: 1700});
    ScrollReveal().reveal(".arrow-down", {delay: 1800});
}

function Intro(){
    return(
        <div id="title-links">
            <div className="main-text">
                <h3><span className="head-one load-hidden">Hey there!</span> <span className="head-two load-hidden">My name is Ethan McDowell.</span></h3>
                <p className="about-text load-hidden">I'm a full-stack web developer from Detroit, Michigan.</p>
                <FontAwesomeIcon icon={["fas", "arrow-circle-down"]} size="3x" className="arrow-down load-hidden" />
            </div>
        </div>
    )
}

export default Intro;