import React, { useState, useEffect } from 'react';
import './Temperature.scss';
import { gql } from 'apollo-boost';
import { graphql } from 'react-apollo';

const getDataQuery = gql`
    {
        Temperatures(limit: 1) {
            temperature
        }
    }
`

function Temperature(props) {
    const data = props.data;

    if (data.loading) {
        return (
            <div>
                <h2>Loading...</h2>
            </div>
        )
    } else {
        return (
            <div className="dataCard">
                <div className="topData">
                    <h2>{data.Temperatures[0].temperature}</h2>
                </div>
                <div className="middleSection">
                    <p className="dataTitle">Temperature</p>
                </div>

                <div className="bottomData">
                    <h2>{data.Temperatures[0].temperature}</h2>
                </div>
            </div>
        )
    }
}

export default graphql(getDataQuery, { options: { pollInterval: 1000 * 30 } })(Temperature);
