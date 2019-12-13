import React from 'react';
import c from './Coordinates.module.css';
import {NavLink} from 'react-router-dom';
import Button from './../Button/Button';
const Coordinates =(props)=>{
        return <div id={c.table}>
            <div>
            <label className={c.pointName}>X</label>
            <label className={c.pointName}>Y</label>
            </div>
            <div>
            <input type='text' className={c.newPoint} />
            <input type='text' className={c.newPoint} />
            </div>
            <Button id={c.add_point} text='Добавить точку' />
            <br/>
            <NavLink to='/graphic'><Button id='create_graph' text='Перейти к построению графика' /></NavLink></div>;
    }
export default Coordinates;