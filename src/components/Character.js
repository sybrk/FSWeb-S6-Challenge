import React from "react";
import Films from "./Films";
const Character = (props) => {
    
    const {character} = props;

    const {name, films} = character;

    return (
        <>
            <h1>{name}</h1>
            <Films films={films} />
        </>
    )
}

export default Character;