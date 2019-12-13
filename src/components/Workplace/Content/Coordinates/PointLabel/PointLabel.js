import React from 'react';
import p from './PointLabel.module.css';
const PointLabel = (props) =>{
    return <span className={p.pointName}>
            {props.line}
        </span>;
}
export default PointLabel;