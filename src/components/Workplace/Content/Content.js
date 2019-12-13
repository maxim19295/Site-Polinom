import React from 'react';
import Method from './Method/Method';
import Coordinates from './Coordinates/Coordinates';
import Graphic from './Graphic/Graphic';
const Content = (props) =>{
    return <>
        <Method needState={props.needState}/>
        <Coordinates />
        <Graphic />
        {/*Choosing method or entering coordinates or building graphic*/}
            </>;
}
export default Content;