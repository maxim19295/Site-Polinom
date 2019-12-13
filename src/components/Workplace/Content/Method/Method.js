import React from 'react';
import m from './Method.module.css';
import {NavLink} from 'react-router-dom';
const Method =(props)=>{
    let Methods = props.needState.methods.map(m=><option>{m.text}</option>);
        return <div className={m.method}>
            <p>Для начала выберите нужный:</p>
        <select id='method' value={props.needState.method}>
            {Methods}
            </select>
            <NavLink to='/coords'><button id='next'>Дальше</button></NavLink>
    </div>;
}
export default Method;