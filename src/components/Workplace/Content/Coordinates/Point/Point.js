import React from 'react';
import point from './Point.module.css';
import c from './../Coordinates.module.css';
const Point = (props) =>{
    let classPoint, valuePoint;
    let newPointCoordinate=React.createRef();
    if(props.line==='X')
        {classPoint=' pointX';
         if(props.newPoint.newX!==''){valuePoint=props.newPoint.newX;}
         else valuePoint='';
        }
    else if(props.line==='Y')
        {classPoint=' pointY';
        if(props.newPoint.newY!==0){valuePoint=props.newPoint.newY;}
         else valuePoint='';
        }
    let onChangeNewPoint=()=>{
    props.inputNewCoord(newPointCoordinate.current.value,props.line);
    if((props.newPoint.newX==='')||(props.newPoint.newY===''))
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