import React from "react";
import Film from "./Film";

const Films = (props) => {
    const {films} = props 

    return (
        <>
            {films.length && films.map((film, index) => {
                return (
                    <Film film = {film} key = {index} />
                )
            })}
        </>
        
    )
}

export default Films;