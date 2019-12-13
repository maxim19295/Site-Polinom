import React from 'react';
import g from './Graphic.module.css';
class Graphic extends React.Component{
    render(){
        return <canvas id={g.graph} height='600' width='600'>
        </canvas>;
    }
}
export default Graphic;