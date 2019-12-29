import React from 'react';
import m from './Method.module.css';
import {NavLink} from 'react-router-dom';
import Button from './../Button/Button';
const Method =(props)=>{
    let selectedMethod=React.createRef();
    let onChangeMethod=()=>{
        props.changeMethod(selectedMethod.current.value);
        if(selectedMethod.current.value===props.state.list_methods[0].text) document.querySelector('button[id="next"]').setAttribute('disabled','disabled');
        else document.querySelector('button[id="next"]').removeAttribute('disabled');
    }
    let Methods = props.state.list_methods.map(m=><option>{m.text}</option>);
        return <div className={m.method}>
            <p>Для начала выберите нужный:</p>
        <select ref={selectedMethod} id='method' value={props.state.method} onChange={onChangeMethod}>
            {Methods}
            </select>
            <NavLink to='/coords'><Button id='next' text='Дальше'/></NavLink>
    </div>;
}
export default Method;