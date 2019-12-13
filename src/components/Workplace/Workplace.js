import React from 'react';
import WP_Header from './WP_Header/WP_Header';
import Content from './Content/Content';
import w from './Workplace.module.css';
const Workplace = (props) => {
    return <div className={w.place}>
            <WP_Header type_header={props.type_header}/>
            <Content type={props.type} needState={props.needState}/>
            </div>;
}
export default Workplace;
