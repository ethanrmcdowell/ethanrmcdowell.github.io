import React from "react";
import Card from "../components/Card";
import projects from "../utils/projects.js";

function createCard(project) {
    return(
        <Card
            key={project.id} 
            id={project.id}
            title={project.title}
            href={project.href}
            img={project.img}
        />
    );
}

function Portfolio() {
    return(
        <div>
            <h1>PORTFOLIO</h1>
            <p>Midnight cold house delirious effusion miasma rapturous, alarum tinctured cloister alarm invalid such a. Effusion rapturous cartilaginous bitter tintinnabulation fearful afflicts. Laconic humours alarm ardor dignified weakened, chapter antechamber afflicts heath ill health fearful beyond delirious secret memory. Countenance malicious wakened dignity stately savored asunder doom sepuchral engraven crimson madness. In articulo mortis palliative morbid piety vault repentant wicked.</p>
            <div className="row">{projects.map(createCard)}</div>
        </div>
    )
}

export default Portfolio;