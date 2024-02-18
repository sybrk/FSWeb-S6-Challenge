import React from "react";

const Film = (props) => {
    
    const {film} = props;

    const {title} = film;

    return (
        <>
            <h1>{title}</h1>
            
            
        </>
    )
}

export default Film;