import React, { useEffect, useState } from "react";
import DataObj from "../fetchData";

const Film = (props) => {
    const {film} = props 
    const [filmObj, setFilmOb] = useState({});

    useEffect(() => {
        const getFilm = async() => {
            let filmResult = await DataObj.GetSpeficicFilm(film);
            setFilmOb(filmResult);
        }
        getFilm();
    },[film])

    return (
        <>
            <h3>{filmObj && filmObj.title}</h3>
        </>
    )
}

export default Film;