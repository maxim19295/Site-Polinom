import React from 'react';
import m from './Method.module.css';
import {NavLink} from 'react-router-dom';
const Method =(props)=>{
    let selectedMethod=React.createRef();
    let onChangeMethod=()=>{
        props.needFunctions.onChangeMethod(selectedMethod.current.value);
        if(selectedMethod.current.value===props.needState.methods[0].text) document.querySelector('button[id="next"]').setAttribute('disabled','disabled');
        else document.querySelector('button[id="next"]').removeAttribute('disabled');
    }
    let Methods = props.needState.methods.map(m=><option>{m.text}</option>);
        return <div className={m.method}>
            <p>Для начала выберите нужный:</p>
        <select ref={selectedMethod} id='method' value={props.needState.method} onChange={onChangeMethod}>
            {Methods}
            </select>
            <NavLink to='/coords'><button id='next'>Дальше</button></NavLink>
    </div>;
}
export default Method;