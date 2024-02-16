import React from "react";

import Character from "./Character";

const CharacterContainer = (props) => {

    const {characters} = props;

    return (
        <>
            {characters.results &&
            characters.results.map((character, index) => {
                return ( <Character key = {index} character = {character} />)
            })}
            
        </>
    )

}

export default CharacterContainer;