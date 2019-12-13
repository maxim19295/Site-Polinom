import React from 'react';
import Method from './Method/Method';
import Coordinates from './Coordinates/Coordinates';
import Graphic from './Graphic/Graphic';
const Content = (props) =>{
    switch (props.type){
        case 'method': return <Method needState={props.needState} needFunctions={props.needFunctions.onChangeMethod}/>;
        case 'coords': return <Coordinates needState={props.needState} needFunctions={props.needFunctions}/>;
        case 'graphic': return <Graphic />;
        default: {}}
}
export default Content;