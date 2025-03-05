import React from "react";
import './slide.css';

const headStyle={
    fontSize:'2em'
};
const bodyStyle={
    fontSize:'2.5em'
};
const center={
    textAlign:'center' as const
};
const finalStyle={
    ...headStyle,
    ...bodyStyle,
    ...center
};

const el=(
    <div className="slide">
    <h1 style={finalStyle}> Introduction to React</h1>
    <hr />
    <ul style={bodyStyle}>
    <li> This is the slide</li>
    <li>welcome to the basic react training</li>
    </ul>
    </div>
);
export default el;