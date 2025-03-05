import React from "react";
import Slide from "./react-component/slide-element";

//import './react-component/slide.css';
const el=(
    <>
    <Slide  heading="how do you style in the react?" page={{current:1, total:2}}>
          <div className="body-text">
             <ul style={{ margin: '1.5em'}}>
                <li> This is the slide</li>
                <li>welcome to the basic react training</li>
                <li>welcome to the basic react training</li>

            </ul>
          </div> 
    </Slide>
    <Slide  heading="This is how you use props in react?" page={{current:2, total:2}}>
          <div className="body-text">
             <p>
                Props are used to customize the existing react components
             </p>
          </div> 
    </Slide>
    </>
);
export default el;

