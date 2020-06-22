import React, { useState, useEffect } from 'react';
import './Header.scss'
import waterIcon from "../../images/water.png";
import tempIcon from "../../images/temp.png";

function Header() {
    const [moisture, setMoisture] = useState(0);

    return (
        <div className="headerWrapper">
            <div className="headerContent">
                <span className="icon"><img src={waterIcon}/></span><span>{moisture}</span>
                <span className="icon"><img src={tempIcon}/></span><span>25° | 27°</span>
            </div>
        </div>
    );
}

export default Header;
