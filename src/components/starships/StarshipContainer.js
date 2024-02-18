import React, { useState, useEffect } from "react";
import DataObj from "../../fetchData";
import Starship from "./Starship";


const StarshipContainer = (props) => {
        const {callstarship} = props

    const [starships, setStarships] = useState({})

    useEffect(() => {
        const getStarships = async() => {
            let result = await DataObj.GetStarships(1)
            
            setStarships(result);
        }
        getStarships();
    },[callstarship])

    return (
        <>
            {starships.results &&
            starships.results.map((starship, index) => {
                return ( <Starship key = {index} starship = {starship} />)
            })}
            
        </>
    )

}

export default StarshipContainer;