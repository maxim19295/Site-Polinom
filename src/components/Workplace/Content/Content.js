import React from 'react';
import MethodContainer from './Method/MethodContainer';
import CoordinatesContainer from './Coordinates/CoordinatesContainer';
import GraphicContainer from './Graphic/GraphicContainer';
const Content = (props) =>{
    switch (props.type){
        case 'method': return <MethodContainer />;
        case 'coords': return <CoordinatesContainer/>;
        case 'graphic': return <GraphicContainer />;
        default: {}}
}
export default Content;