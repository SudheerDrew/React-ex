import React,{Fragment} from "react";

const animeEL=(
    <Fragment>
        <li>dragon ball</li>
        <li>one piece</li>
    </Fragment>
);
const manhwaEL=(

    <Fragment>
        <li>solo leveling</li>
        <li>nano machine</li>
    </Fragment>
);
// const finalEL = () => {
//     return (
//         <ul>
//         {animeEL}
//         {manhwaEL}
//         </ul>
//       // Your JSX code here
//     );
//   };
  
//   export default finalEL;

const finalEL=(
    <ul>
    {animeEL}
    {manhwaEL}
    </ul>
);
export default finalEL;