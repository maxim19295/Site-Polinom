import React from 'react';
import Method from './Method/Method';
import Coordinates from './Coordinates/Coordinates';
const Content = (props) =>{
    return <>
        <Method needState={props.needState}/>
        <Coordinates />
        {/*Choosing method or entering coordinates or building graphic*/}
            </>;
}
export default Content;