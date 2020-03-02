import React from 'react';
import { render } from 'react-dom';
import { Stage, Layer, Rect, Transformer } from 'react-konva';

const initialRectangles = [
  {
    x: 100,
    y: 100,
    width: 200,
    height: 200,
    fill: 'red',
    id: 'rect1'
  },
  {
    x: 350,
    y: 450,
    width: 200,
    height: 200,
    fill: 'black',
    id: 'rect2'
  }
];

const Rectangle = ({shapeProps, onChange, onSelect, isSelected}) => {
  const shapeRef = React.useRef();
  const trRef = React.useRef();

  React.useEffect( () => {
    if(isSelected){
      trRef.current.setNode(shapeRef.current);
      trRef.current.getLayer().batchDraw();
    }
  }, [isSelected]);

  return (
    <React.Fragment>
      <Rect
        {...shapeProps}
        ref={shapeRef}
        draggable={true}
        onDragEnd={(e)=>{
          onChange({
            ...shapeProps,
            x: e.target.x(),
            y: e.target.y()
          });
        }}
        onClick={onSelect}
        onTransformEnd={ e => {
          const node = shapeRef.current;
          const scaleX = node.scaleX();
          const scaleY = node.scaleY();
          console.log('scaleXY ', scaleX, scaleY);

          node.scaleX(1);
          node.scaleY(1);
          onChange({
            ...shapeProps,
            x: node.x(),
            y: node.y(),
            width: Math.max(5, node.width()*scaleX),
            height: Math.max(node.height()*scaleY)
          });

        }}
      />
      {isSelected && (
        <Transformer
          ref={trRef}
          boundBoxFunc={(oldBox, newBox)=>{
            // limit resize
            if (newBox.width < 100 || newBox.height < 100) {
              return oldBox;
            }
            return newBox;
          }}
        />
      )}

    </React.Fragment>
  )
}

export default function TransformerNode () {
  const [rectangles, setRectangles] = React.useState(initialRectangles);
  const [selectedId, selectShape] = React.useState(null);

  return (
    <Stage
      width={window.innerWidth}
      height={window.innerHeight}
      onMouseDown={e=>{
        const clickedOnEmpty = e.target === e.target.getStage();
        if(clickedOnEmpty) {
          selectShape(null);
        }
      }}
    >
      <Layer>
        {rectangles.map((rect, i) => {
            return (
              <Rectangle
                key={i}
                shapeProps={rect}
                isSelected={rect.id === selectedId}
                onSelect={()=> {
                  selectShape(rect.id);
                }}
                onChange={ newAttrs => {
                  const rects = rectangles.slice();
                  rects[i] = newAttrs;
                  setRectangles(rects);
                }}
              />
            );
          })}
      </Layer>
    </Stage>
  );
};
