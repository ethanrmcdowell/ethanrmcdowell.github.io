import React from "react";
import "./style.css";
import ScrollReveal from "scrollreveal";


function Card(props){
    return(
        <div className="col-xs-12 col-sm-6 col-lg-4">
            <a href={props.href} target="_blank" rel="noreferrer">
                <div className="card">
                    <img src={process.env.PUBLIC_URL + props.img} alt={props.alt}/>
                    <div className="card-body">
                        <h5 className="card-title">{props.title}</h5>
                    </div>
                </div>
            </a>
        </div>
    )
}

export default Card;