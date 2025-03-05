import React ,{ReactNode}from "react";
import './slide.css';
//import PropTypes, { number, string } from "prop-types";
//import { type } from "os";

const headStyle={
    fontSize:'2em'
};
const bodyStyle={
    fontSize:'2.5em'
};
const center={
    textAlign:'center' as const
};

type Props={
    heading:string
    page?:{
        current:number,
        total:number
    },
    children:ReactNode
}

function Slide({heading, page,children}: Props){

const slide=(
    <div className="slide" >
        <span className="slide-number">{page?.current}/{page?.total}</span>
    <h1 className="heading-text text-center"> {heading}</h1>
    <hr />
        {children}
    </div>
);
return slide;

};
// Slide.propTypes={
//     heading: PropTypes.string.isRequired,
//     page:PropTypes.shape({
//          current:PropTypes.number.isRequired,
//          total:PropTypes.number.isRequired
//     }),
//     children: PropTypes.node.isRequired
// }


export default Slide;