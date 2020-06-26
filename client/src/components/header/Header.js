import React, { useState, useEffect } from 'react';
import './Header.scss'
import waterIcon from "../../images/water.png";
import tempIcon from "../../images/temp.png";

function Header() {
    const [moisture, setMoisture] = useState(0);
    const [temperature, setTemperature] = useState(0);
    const [humidity, setHumidity] = useState(0);

    const updateHeaderData = async () => {
        const data = await fetch('/api/graphql', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ query: '{ SoilMoistures(limit: 1) {moisture temperature { temperature } humidity { humidity } } }'})
        });
        const json = await data.json();
        console.log()
        setHumidity(json.data.SoilMoistures[0].humidity.humidity)
        setTemperature(json.data.SoilMoistures[0].temperature.temperature)
        setMoisture(json.data.SoilMoistures[0].moisture)
        
    }

    useEffect(() => {
        updateHeaderData();
    }, [])


    return (
        <div className="headerWrapper">
            <div className="headerContent">
                <span className="icon"><img src={waterIcon}/></span><span>{moisture}</span>
                <span className="icon"><img src={tempIcon}/></span><span>{temperature}° | 27°</span>
            </div>
        </div>
    );
}

export default Header;
