import React, { Component } from 'react';
import ToDoItem from '../atoms/test_child';

class ToDoList extends React.Component {
    myCallback = (dataFromChild) => {
        console.log(dataFromChild);
    }

    render() {
        return (
            <div>
                <ToDoItem callbackFromParent={this.myCallback}/>
            </div>
        );
    }
}

export default ToDoList;