import React from "react";
import Films from "../specifics/film/Films";
import { Title } from "../styled/StyledComponents";
const Character = (props) => {
    
    const {character} = props;

    const {name, films} = character;

    return (
        <>
            <Title> {name} </Title>
            <Films films={films} />
        </>
    )
}

export default Character;