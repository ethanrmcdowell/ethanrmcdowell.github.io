import React from "react";
import "./style.css";

function Card(props){
    return(
        <div className="card-div">
            <a href={props.href}>
                <div className="col-4">
                    <img src={props.img} className="portfolio-img" alt="#" />
                    <div>
                        <h3>{props.title}</h3>
                    </div>
                </div>
            </a>
        </div>
    )
}

export default Card;