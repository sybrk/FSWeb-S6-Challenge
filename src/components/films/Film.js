import React from "react";

const Film = (props) => {
    
    const {film} = props;

    const {title, opening_crawl} = film;

    return (
        <>
            <h1>{title}</h1>
            <p>{opening_crawl}</p>
            
            
        </>
    )
}

export default Film;