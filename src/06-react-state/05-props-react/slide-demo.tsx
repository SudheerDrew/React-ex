//import React from "react";
import Slide from "./react-component/slide-element";
import Slideshow from "./react-component/slideShow-function";

//import './react-component/slide.css';
const el=(
    <Slideshow>
    <Slide  heading="how do you style in the react?" >
          <div className="body-text">
             <ul style={{ margin: '1.5em'}}>
                <li> This is the slide</li>
                <li>welcome to the basic react training</li>
                <li>welcome to the basic react training</li>

            </ul>
          </div> 
    </Slide>
    <Slide  heading="This is how you use props in react?">
          <div className="body-text">
             <p>
                Props are used to customize the existing react components
             </p>
          </div> 
    </Slide>
    <Slide  heading="After the props we have learned the states in the react">
          <div className="body-text">
             <p>
             State is a way to manage data that changes over time in a component.             </p>
          </div> 
    </Slide>
    <Slide  heading="Summary">
          <div className="body-text">
             <p>
             we have learned about 
             <ul>
               <li>
                  react component
               </li>
               <li>
                  react props
               </li>
               <li>
                  react state
               </li>
               </ul>             </p>
          </div> 
    </Slide>
    </Slideshow> 
);
export default el;

