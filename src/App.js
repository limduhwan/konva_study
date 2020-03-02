import React, { Component } from 'react';
import Konva from 'konva';
import { render } from 'react-dom';
import { Stage, Layer, Star, Text } from 'react-konva';
import Stars from './components/stars';
import Toolbar from './components/organisms/toolbar';
import IconContainer from './components/molecules/IconContainer';
import Icon from './components/atoms/icon';
// import redCircle from './components/redCircle';
// import FloatingComponent from './components/floatingcomponents';
// import ToDoList from './components/molecules/test_todolis';
import TransformerApp from './transformer/transformerApp';
import TransformerNode from './transformer/transformer_self';

class App extends Component {

    render() {
        return (
          <div>
              {/*<Icon type='MINUS'/>*/}
              {/*<IconContainer/>*/}
              {/*<Stars></Stars>*/}
              {/*<Toolbar/>*/}
              {/*<FloatingComponent/>*/}
              {/*<TransformerApp/>*/}
              <TransformerNode/>
          </div>
        );
    }
}

// render(<App />, document.getElementById('root'));

export default App;
