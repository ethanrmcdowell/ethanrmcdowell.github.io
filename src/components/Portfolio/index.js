import React from "react";
import Card from "../Card";
import projects from "../../utils/projects.js";
import "./style.css";


function createCard(project) {
    return(
        <Card
            key={project.id} 
            title={project.title}
            href={project.href}
            img={project.img}
            alt={project.alt}
            class={project.class}
        />
    );
}

function Portfolio() {
    return(
        <div className="container" id="portfolio-box">
            <div className="row">{projects.map(createCard)}</div>
        </div>
    )
}

export default Portfolio;