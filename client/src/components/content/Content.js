import React, { useState, useEffect } from 'react';
import './Content.scss';
import Welcome from './welcome/Welcome';

function Content(props) {
    const {content} = props;
    return (
        <div className="content">
            {content}
        </div>
    );
}

export default Content;
