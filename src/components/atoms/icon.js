import React from "react";
import '../../App.css';
// import { css } from 'emotion';

// import ArrowRight from "./arrow-right2.svg";
// import ArrowLeft from "./arrow-left2.svg";
import minus from '../images/ minus.svg';
import plus from '../images/ plus.svg';
import smile from '../images/ smiled.svg';
import video from '../images/video.svg';



export const iconTypes = {
    arrowRight: 'ARROW_RIGHT',
    arrowLeft: 'ARROW_LEFT',
}

// const iconSrc = {
//     ARROW_RIGHT: ArrowRight,
//     ARROW_LEFT: ArrowLeft,
// }

const iconSrc = {
    MINUS: minus,
    PLUS: plus,
    SMILE: smile,
    VIDEO: video
}

// const circleStyles = css({
//     width: 24,
//     height: 24,
//     borderRadius: "50%",
//     backgroundColor: "#f7f7f9",
//     display: "flex",
//     justifyContent: "center"
// });

// export default function Icon({ type }) {
export default function Icon({type}){


    return (
        /*<div className={circleStyles}>*/
        <div onClick={()=> alert(type)}>
            {/*<img src={require('../images/ minus.svg')}/>*/}
            <img src={iconSrc[type]} className='icon' />
        </div>
    )
};