import React from "react";
import "./Home.css";
import ScrollReveal from "scrollreveal";

function Home(){
    ScrollReveal().reveal(".head-one", {delay: 1200});
    ScrollReveal().reveal(".head-two", {delay: 2000});
    ScrollReveal().reveal(".about-text", {delay: 3000});
    return(
        <div id="title-links">
            <div className="main-text">
                <h3><span className="head-one load-hidden">Hey there!</span> <span className="head-two load-hidden">My name is Ethan McDowell.</span></h3>
                <p className="about-text load-hidden">I'm a full-stack web developer from Detroit, Michigan.</p>
            </div>
        </div>
    )
}

export default Home;