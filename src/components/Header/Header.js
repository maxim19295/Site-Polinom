import React from 'react';
import h from './Header.module.css';
import {NavLink} from 'react-router-dom';
const Header = (props) =>{
    const clearState = () => {
        props.clearState();
    }
    return <NavLink to='/'><div className={h.header} onClick={clearState}>Онлайн приближение функций</div></NavLink>;
}
export default Header;
