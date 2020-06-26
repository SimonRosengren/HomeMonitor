import React, { useState, useEffect } from 'react';
import './Main.scss';
import Menu from '../menu/Menu';
import Content from '../content/Content';

function Main() {

    return (
        <div className="main">
            <Content />
            <Menu />
        </div>
    );
}

export default Main;
