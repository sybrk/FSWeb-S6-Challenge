import React from "react";
const Character = (props) => {
    
    const {character} = props;

    const {name} = character;

    return (
        <>
            <h1>{name}</h1>
        </>
    )
}

export default Character;