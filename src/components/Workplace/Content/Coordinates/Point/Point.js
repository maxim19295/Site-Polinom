import React from 'react';
import point from './Point.module.css';
import c from './../Coordinates.module.css';
const Point = (props) =>{
    let classPoint;
    let newPointCoordinate=React.createRef();
    let onChangeNewPoint=()=>{
    props.onEnterNewPoint(props.line,newPointCoordinate.current.value);
    if((props.needState.newX==='')||(props.needState.newY===''))
        document.querySelector('#'+c.add_point).setAttribute('disabled','disabled');
    else document.querySelector('#'+c.add_point).removeAttribute('disabled');
    }
    if(props.line==='X')
        classPoint=' pointX';
    else if(props.line==='Y')
        classPoint=' pointY';
    return <input ref={newPointCoordinate} id={'newField'+props.line} type='number' className={point.point+classPoint} onInput={onChangeNewPoint}/>;
        
}
export default Point;