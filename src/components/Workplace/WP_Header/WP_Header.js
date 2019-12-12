import React from 'react';
import h from './WP_Header.module.css';
const WP_Header = (props) =>{
    return <p className={h.wp_header}>{props.type_header}</p>;
}
export default WP_Header;