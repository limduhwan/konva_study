import React, { Component } from 'react';
import { Button} from 'react-bootstrap';
import '../../App.css';
import Icon from './atoms/icon';

class IconContainer extends Component {
    render() {
        return(
            <div className="icons">
                <Icon type='MINUS'/>
                <Icon type='PLUS'/>
                <Icon type='VIDEO'/>
                <Icon type='SMILE'/>
            </div>
        )
    }
}

export default IconContainer;