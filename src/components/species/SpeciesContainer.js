import React, { useState, useEffect } from "react";
import DataObj from "../../fetchData";
import Species from "./Species";


const SpeciesContainer = (props) => {
        const {callspecies} = props

    const [species, setSpecies] = useState({})

    useEffect(() => {
        const getSpecies = async() => {
            let speciesResult = await DataObj.GetSpecies(1)
            
            setSpecies(speciesResult);
        }
        getSpecies();
    },[callspecies])

    return (
        <>
            {species.results &&
            species.results.map((species, index) => {
                return ( <Species key = {index} species = {species} />)
            })}
            
        </>
    )

}

export default SpeciesContainer;