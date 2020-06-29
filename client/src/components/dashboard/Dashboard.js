import React from 'react';
import './Dashboard.scss';
import Temperature from './Temperature/Temperature'

function Dashboard(props) {


    console.log(props)
    return (
        <div className="dashboard">
            <div className="dashboardRow">
                <Temperature />
            </div>

        </div>
    );
}

export default Dashboard;
