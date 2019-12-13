import React from 'react';
import point from './Point.module.css';
const Point = (props) =>{
    let classPoint;
    if(props.line==='X')
        classPoint=' pointX';
    else if(props.line==='Y')
        classPoint=' pointY';
    return <input id={'newField'+props.line} type='number' className={point.point+classPoint}/>;
        
}
export default Point;