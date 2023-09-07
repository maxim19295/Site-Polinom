import React from 'react';
import c from './Coordinates.module.css';
import {NavLink} from 'react-router-dom';
import Button from './../Button/Button';
import Point from './Point/Point';
import PointLabel from './PointLabel/PointLabel';
const Coordinates =(props)=>{
    let Points = props.coordinates.point.map(point=><><PointLabel line={point.x} /><PointLabel line={point.y} /></>);
    let disabled_value;
    if((props.coordinates.newPoint.newX==='')||(props.coordinates.newPoint.newY===''))
        disabled_value='disabled';
    else disabled_value=null;
        return <div id={c.table}>
            <div>
            <PointLabel line='X' />
            <PointLabel line='Y' />
            </div>
            <div className={c.pointBlock}>
                {Points}
            </div>
            <div>
            <Point id='newXfield' line='X' newPoint={props.coordinates.newPoint} inputNewCoord={props.inputNewCoord}/>
            <Point id='newYfield' line='Y' newPoint={props.coordinates.newPoint} inputNewCoord={props.inputNewCoord}/>
            </div>
            <Button id={c.add_point} text='Добавить точку' needClickFunction={props.saveCoords} disabled={disabled_value} />
            <br/>
            <Button id='create_graph' text='Перейти к построению графика' needClickFunction={()=>{props.changeStep()}}/></div>;
    }
export default Coordinates;