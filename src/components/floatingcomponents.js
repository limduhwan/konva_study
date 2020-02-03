import React, { Component } from 'react';
// import logo from './logo.svg';
import Floating from './floating';
import '../Floating.css';

class floatingcomponent extends Component {
    state = {};

    showFloating = () => {
        this.setState({
            floating: true
        });
    };

    render() {
        const { floating } = this.state;

        return (
            <div style={{width: '400px', height: '400px', position: 'relative'}}>
                <button onClick={this.showFloating}>Show Floating</button>
                {/*<Floating modal show={floating} viewport closeOnModalClick>*/}
                {/*    <div className="modal-msg">*/}
                {/*        <img  className="App-logo" alt="logo" />*/}
                {/*        Loading...*/}
                {/*    </div>*/}
                {/*</Floating>*/}
            </div>
        );
    }
}

export default floatingcomponent;