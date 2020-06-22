import React, { useState, useEffect } from 'react';
import './Welcome.scss'

function Welcome() {

    return (
        <div className="wrapper">
            <div className="accentBox">
                <div className="mainContent">
                    <h2>Hello.</h2>
                    <p>I'm Simon and I'm a developer</p>
                </div>
            </div>
            <div className="secondaryBox">
                <div className="buttonWrapper">
                    <button>JOBS</button>
                    <button>THIS</button>
                </div>
            </div>
        </div>
    );
}

export default Welcome;
