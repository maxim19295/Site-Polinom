import React from 'react';
import c from './Coordinates.module.css';
import {NavLink} from 'react-router-dom';
import Button from './../Button/Button';
import Point from './Point/Point';
import PointLabel from './PointLabel/PointLabel';
const Coordinates =(props)=>{
        return <div id={c.table}>
            <div>
            <PointLabel line='X' />
            <PointLabel line='Y' />
            </div>
            <div>
            <Point line='X' />
            <Point line='Y' />
            </div>
            <Button id={c.add_point} text='Добавить точку' />
            <br/>
            <NavLink to='/graphic'><Button id='create_graph' text='Перейти к построению графика' /></NavLink></div>;
    }
export default Coordinates;