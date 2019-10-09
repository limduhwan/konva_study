import React from 'react';
import '../../App.css';
import IconContainer from "./molecules/IconContainer";

function toolbar(){
    return (
        <div>
          <div className="Rectangle">
            <IconContainer></IconContainer>
          </div>
        </div>
    );
}


export default toolbar;