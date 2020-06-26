import React, { useState, useEffect } from 'react';
import './Menu.scss'
import Welcome from '../content/welcome/Welcome';
import Empty from '../empty/Empty';
import Data from '../data/Data';

function Menu(props) {
    const { setContent } = props;
    return (
        <div className="menu">
            <div className="buttonWrapper">
                <button onClick={() => {
                    setContent(<Welcome />)
                }}>START</button>
                <button>JOBS</button>
                <button>THIS</button>
                <button onClick={() => {
                    setContent(<Data />)
                }}>Data</button>
                <button onClick={() => {
                    setContent(<Empty />)
                }}>BLOG</button>
            </div>
        </div>
    );
}

export default Menu;
