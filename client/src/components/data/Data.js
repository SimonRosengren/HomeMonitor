import React, { useState, useEffect } from 'react';
import './Data.scss';
import { gql } from 'apollo-boost';
import { graphql } from 'react-apollo';
import LiveData from '../dashboard/liveData/LiveData'

const getDataQuery = gql`
    {
        SoilMoistures(limit: 1) {
            moisture
            humidity {
                humidity
            }
            temperature {
                id
            }
        }
    }
`

function Content(props) {
    const [temperature, setTemperature] = useState();
    const [humidity, setHumidity] = useState();
    const [soilMoisture, setSoilMoisture] = useState();

    console.log(props)
    return (
        <div className="dataWrapper">
            <LiveData />
        </div>
    );
}

export default graphql(getDataQuery)(Content);
