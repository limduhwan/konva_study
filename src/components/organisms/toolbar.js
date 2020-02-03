import React from 'react';
import '../../App.css';
import IconContainer from "../molecules/IconContainer";

// const IconContainer = ({ type, onIconClick }) => {
const toolbar = ({ type, onIconClick }) => {
    return (
        <div>
          <div className="Rectangle">
            <IconContainer></IconContainer>
          </div>
        </div>
    );
}

export default toolbar;