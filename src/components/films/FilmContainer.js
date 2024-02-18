import React, { useState, useEffect } from "react";
import DataObj from "../../fetchData";
import Film from "./Film";


const FilmContainer = (props) => {
        const {callfilm} = props

    const [films, setFilms] = useState({})

    useEffect(() => {
        const getFilms = async() => {
            let filmResult = await DataObj.GetFilms(1)
            
            setFilms(filmResult);
        }
        getFilms();
    },[callfilm])

    return (
        <>
            {films.results &&
            films.results.map((film, index) => {
                return ( <Film key = {index} film = {film} />)
            })}
            
        </>
    )

}

export default FilmContainer;