import React from 'react';
import point from './Point.module.css';
import c from './../Coordinates.module.css';
const Point = (props) =>{
    let classPoint, valuePoint;
    let newPointCoordinate=React.createRef();
    if(props.line==='X')
        {classPoint=' pointX';
         if(props.needState.newX!==0){valuePoint=props.needState.newX;}
         else valuePoint='';
        }
    else if(props.line==='Y')
        {classPoint=' pointY';
        if(props.needState.newY!==0){valuePoint=props.needState.newY;}
         else valuePoint='';
        }
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
    return <input ref={newPointCoordinate} id={'newField'+props.line} type='number' className={point.point+classPoint} onInput={onChangeNewPoint} value={valuePoint}/>;
        
}
export default Point;