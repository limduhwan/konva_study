import React, { Component } from 'react';

class ToDoItem extends React.Component{
    someFn = (id, e) => {
        this.props.callbackFromParent(id);
    }

    render() {
        return(
            <div onClick={ (e) => this.someFn('id', e)}>
                TEST
            </div>
        )
    }
};

export default ToDoItem;