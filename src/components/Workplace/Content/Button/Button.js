import React from 'react';
const Button = (props) => {
    let onClickFunction = () =>{
        if(props.needClickFunction){props.needClickFunction();}
    }
    return <button id={props.id} disabled={props.disabled==='disabled' ? 'disabled' : null} onClick={onClickFunction}>{props.text}</button>;
}
export default Button;