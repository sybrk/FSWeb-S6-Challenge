import React from "react";

const Vehicle = (props) => {
    
    const {vehicle} = props;

    const {name, manufacturer} = vehicle;

    return (
        <>
            <h1>{name}</h1>
            <p>{manufacturer}</p>
            
        </>
    )
}

export default Vehicle;