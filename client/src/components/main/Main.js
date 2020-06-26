import React, { useState, useEffect } from 'react';
import './Main.scss';
import Menu from '../menu/Menu';
import Content from '../content/Content';

function Main() {
    const [content, setContent] = useState();
    return (
        <div className="main">
            <Content content={content}/>
            <Menu setContent={setContent}/>
        </div>
    );
}

export default Main;
