import React from 'react';
import c from './Coordinates.module.css';
import {NavLink} from 'react-router-dom';
const Coordinates =(props)=>{
        return <div id={c.table}>
            <div>
            <label>X</label>
            <label>Y</label>
            </div>
            <div>
            <input type='text' className={c.newPoint} />
            <input type='text' className={c.newPoint} />
            </div>
            <button id={c.add_point}>Добавить точку</button>
            <br/>
            <NavLink to='/graphic'><button id='create_graph'>Перейти к построению графика</button></NavLink></div>;
    }
export default Coordinates;