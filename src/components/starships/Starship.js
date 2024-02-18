import React from "react";

const Starship = (props) => {
    
    const {starship} = props;

    const {name, manufacturer} = starship;

    return (
        <>
            <h1>{name}</h1>
            <p>{manufacturer}</p>
            
        </>
    )
}

export default Starship;