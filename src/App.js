import React, { Component } from 'react';
import Konva from 'konva';
import { render } from 'react-dom';
import { Stage, Layer, Star, Text } from 'react-konva';
import Stars from './components/stars';
import Toolbar from './components/organisms/toolbar';
import IconContainer from './components/molecules/IconContainer';
import Icon from './components/atoms/icon';
// import redCircle from './components/redCircle';
import FloatingComponent from './components/floatingcomponents';
import ToDoList from './components/molecules/test_todolist';

class App extends Component {

    render() {
        return (
          <div>
              {/*<Icon type='MINUS'/>*/}
              {/*<IconContainer/>*/}
              {/*<Stars></Stars>*/}
              <Toolbar/>
              {/*<FloatingComponent/>*/}
          </div>
        );
    }
}

// render(<App />, document.getElementById('root'));

export default App;