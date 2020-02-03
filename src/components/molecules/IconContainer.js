import React, { Component } from 'react';
import '../../App.css';
import Icon from '../atoms/icon';

const IconContainer = ({ type, onIconClick, callbackFromParent }) => {

    const onIconClicked = (type, e) => {
        console.log(type);
        //this.props.callbackFromParent(type);
    };

    return(
        <div className="icons">
            <Icon type='PENCIL' onIconClick={onIconClicked} />
            <Icon type='CIRCLE'  onIconClick={onIconClicked} />
            <Icon type='POSTIT' onIconClick={onIconClicked} />
            <Icon type='TEXT' onIconClick={onIconClicked} />
            <Icon type='IMAGE' onIconClick={onIconClicked} />
        </div>
    )
}

export default IconContainer;


