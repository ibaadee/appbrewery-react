import React from "react";
import Avatar from "./Avatar";
import Details from "./Details";

function Card (props){
    return(
    <div className="card">
        <div className="top">
            <h2 className="name">{props.name}</h2>
            <Avatar imageLink={props.imageLink} />
        </div>
        <div className="bottom">
            <Details 
                content={props.phone}
            />
            <Details 
                content={props.email}
            />
        </div>
    </div>
    );
}

export default Card;