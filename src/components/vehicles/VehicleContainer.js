import React, { useState, useEffect } from "react";
import DataObj from "../../fetchData";
import Vehicle from "./Vehicle";


const VehicleContainer = (props) => {
        const {callvehicle} = props

    const [vehicles, setVehicles] = useState({})

    useEffect(() => {
        const getVehicles = async() => {
            let result = await DataObj.GetVehicles(1)
            
            setVehicles(result);
        }
        getVehicles();
    },[callvehicle])

    return (
        <>
            {vehicles.results &&
            vehicles.results.map((vehicle, index) => {
                return ( <Vehicle key = {index} vehicle = {vehicle} />)
            })}
            
        </>
    )

}

export default VehicleContainer;