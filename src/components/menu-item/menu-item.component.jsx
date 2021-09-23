import React from "react";

import './menu-item.style.scss'

const MenuItem = ({ title, imageurl, size }) => (
    <div className={`${size} menu-item`} >

        <div style={{
            backgroundImage: `url(${imageurl})`
        }} className="background-image">

        </div>

        <div className="content">
            <h1 className="title">
                {title.toUpperCase()}
            </h1>
            <span className="subtitle">
                SHOP NOW
            </span>
        </div>
    </div>
);

export default MenuItem;

