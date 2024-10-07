import React from "react";

export default function TopSpot(props) {
    const {name, description, location} = props.spot;

    return(
        <div className="container pt-4 topSpot">
            <h2>{name}</h2>
            <p>{description}</p>
            <a target="_blank" className="bold" href={`https://www.google.com/maps/dir/?api=1&destination=${location}`}>Directions <i className="fa-solid fa-arrow-up-right-from-square"></i></a>
            <hr/>
        </div>
    );
}