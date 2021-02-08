import React from "react";

function Card(props){
    return(
        <div>
            <a href="https://www.google.com">
                <div className="card">
                    <img src="#" alt="#" />
                    <div>
                        <h3>{props.title}</h3>
                    </div>
                </div>
            </a>
        </div>
    )
}

export default Card;