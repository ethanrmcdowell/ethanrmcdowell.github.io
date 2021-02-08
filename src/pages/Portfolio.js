import React from "react";
import Card from "../components/Card";
import projects from "../utils/projects.js";

function createCard(project) {
    return(
        <Card 
            title={project.title}
        />
    );
}

function Portfolio() {
    return(
        <div>
            <h1>PORTFOLIO</h1>
            <p>Three o'clock struck, and four, and the half-hour rang its double chime, but Dorian Gray did not stir. He was trying to gather up the scarlet threads of life and to weave them into a pattern; to find his way through the sanguine labyrinth of passion through which he was wandering. He did not know what to do, or what to think. Finally, he went over to the table and wrote a passionate letter to the girl he had loved, imploring her forgiveness and accusing himself of madness. He covered page after page with wild words of sorrow and wilder words of pain. There is a luxury in self-reproach. When we blame ourselves, we feel that no one else has a right to blame us. It is the confession, not the priest, that gives us absolution. When Dorian had finished the letter, he felt that he had been forgiven.</p>
            {projects.map(createCard)}
        </div>
    )
}

export default Portfolio;