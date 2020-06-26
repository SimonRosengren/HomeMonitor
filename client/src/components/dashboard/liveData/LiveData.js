import React, { useState, useEffect } from 'react';
import './LiveData.scss';
import { gql } from 'apollo-boost';
import { graphql } from 'react-apollo';

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
let ctr = 0;

function LiveData(props) {
    const [temp, setTemp] = useState();
    const getData = () => {
        ctr++;
        if(props.data.loading) {
            return <p>Loading....</p>
        }
        else {
            return <p>{props.data.SoilMoistures[0].moisture}</p>
        }
    }

    console.log(props)
    return (
        <div className="dataWrapper">
            {getData()}
        </div>
    );
}

export default graphql(getDataQuery, {options: {pollInterval: 3000}})(LiveData);
