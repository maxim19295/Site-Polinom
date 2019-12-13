import React from 'react';
import c from './Coordinates.module.css';
import {NavLink} from 'react-router-dom';
import Button from './../Button/Button';
import Point from './Point/Point';
import PointLabel from './PointLabel/PointLabel';
const Coordinates =(props)=>{
    let Points = props.needState.point.map(point=><><PointLabel line={point.x} /><PointLabel line={point.y} /></>);
    let disabled_value;
    if((props.needState.newX==='')||(props.needState.newY===''))
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
            <Point id='newXfield' line='X' needState={props.needState} onEnterNewPoint={props.needFunctions.onInputNewCoordinate}/>
            <Point id='newYfield' line='Y' needState={props.needState} onEnterNewPoint={props.needFunctions.onInputNewCoordinate} />
            </div>
            <Button id={c.add_point} text='Добавить точку' needClickFunction={props.needFunctions.saveCoordinates} disabled={disabled_value} />
            <br/>
            <NavLink to='/graphic'><Button id='create_graph' text='Перейти к построению графика'/></NavLink></div>;
    }
export default Coordinates;