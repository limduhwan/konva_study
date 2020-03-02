import React from "react";
import '../../App.css';

import minus from '../../images/ minus.svg';
import plus from '../../images/ plus.svg';
import smile from '../../images/ smiled.svg';
import video from '../../images/video.svg';

// import pencil from '../../images/pencil.png';
// import circle from '../../images/circle.png';
// import postit from '../../images/postit.png';
// import text from '../../images/text.png';
// import image from '../../images/image.png';

const iconSrc = {
    // MINUS: minus,
    // PLUS: plus,
    // SMILE: smile,
    // VIDEO: video,
    // PENCIL: pencil,
    // // CIRCLE: circle,
    // POSTIT: postit,
    // TEXT: text,
    // IMAGE: image
}

const Icon = ({ type, onIconClick }) => {

    return (
        <div onClick={ (e) => onIconClick(type, e)}>
            <img src={iconSrc[type]} className='icon' />
        </div>
    )
};

export default Icon;


// onClick={ (e) => this.someFn('id', e)}>
