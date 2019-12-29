import React from 'react';
import g from './Graphic.module.css';
class Graphic extends React.Component{
    componentDidMount(){
        if(this.props.data.length>0){
        let graphic=document.querySelector('canvas');
        //максимальное число по модулю из массива координат (начало)
        let max_abs_x = Math.abs(this.props.data[0].x);
        for(let i=0;i<this.props.data.length;i++)
            if(max_abs_x<Math.abs(this.props.data[i].x)) max_abs_x=Math.abs(this.props.data[i].x);
        let max_abs_y = Math.abs(this.props.data[0].y);
        for(let i=0;i<this.props.data.length;i++)
            if(max_abs_y<Math.abs(this.props.data[i].y)) max_abs_y=Math.abs(this.props.data[i].y);
        let just_max=(max_abs_x>max_abs_y) ? max_abs_x : max_abs_y;
        let x_interval=graphic.width/(2*just_max);
        let y_interval=graphic.height/(2*just_max);
        // максимальное число по модулю из массива координат (конец)
        let ctx=graphic.getContext('2d');
        ctx.beginPath();                                                    //***** построение осей координат
        ctx.lineWidth=2;                                                    
        ctx.moveTo(0,graphic.height/2);                                     //         
        ctx.lineTo(graphic.width,graphic.height/2);                         // Ох
        ctx.lineTo((graphic.width-10),(graphic.height/2-5));                // *
        ctx.moveTo(graphic.width,graphic.height/2);                         //  стрелка
        ctx.lineTo((graphic.width-10),(graphic.height/2+5));                // *
        ctx.moveTo(graphic.width/2,graphic.height);                         // Oy
        ctx.lineTo(graphic.width/2,0);                                      // 
        ctx.lineTo((graphic.width/2-5),10);                                 //  *
        ctx.moveTo(graphic.width/2,0);                                      // стрелка
        ctx.lineTo((graphic.width/2+5),10);                                 //  *
        ctx.stroke();                                                         //************
        ctx.beginPath();                                                        
        ctx.lineWidth=0.5;
        //  промежуточные оси (начало)
        for(let i=0;i<2*just_max;i++)
            {
                ctx.moveTo(0,i*y_interval);
                ctx.lineTo(graphic.width,i*y_interval);
                ctx.moveTo(i*x_interval,0);
                ctx.lineTo(i*x_interval,graphic.height);
            }
        ctx.stroke();
        // промежуточные оси (конец)
        // выставление макимумов и минимумов по краям осей координат(начало)
        ctx.beginPath();
        ctx.font = '12pt serif';
        ctx.fillText(`-${just_max}`,0,graphic.height/2+15);
        ctx.beginPath();
        ctx.font = '12pt serif';
        ctx.fillText(`${just_max}`,graphic.width-15,graphic.height/2+15);
        ctx.beginPath();
        ctx.font = '12pt serif';
        ctx.fillText(`-${just_max}`,graphic.width/2-25,graphic.height-10);
        ctx.beginPath();
        ctx.font = '12pt serif';
        ctx.fillText(`${just_max}`,graphic.width/2-20,15);
        // выставление макимумов и минимумов по краям осей координат(конец)
        //выставление введенных точек на СК (начало)
        for(let i=0;i<this.props.data.length;i++){
            ctx.beginPath();
            ctx.fillStyle='red';
            ctx.arc((graphic.width/2+this.props.data[i].x*x_interval),(graphic.height/2-this.props.data[i].y*y_interval),3,0,Math.PI*2,true);
            ctx.fill();
            ctx.beginPath();
            ctx.fillStyle='black';
            ctx.font='9pt serif';
            ctx.fillText(`(${this.props.data[i].x};${this.props.data[i].y})`,(graphic.width/2+this.props.data[i].x*x_interval),(graphic.height/2-this.props.data[i].y*y_interval));
        }
        //выставление введеных точек на СК (конец)
        ctx.stroke();
        ctx.beginPath();
        ctx.strokeStyle=(this.props.currentMethod=='Лагранжа') ? 'darkblue' : 'orange';
        ctx.lineWidth=2;
        this.props.buildGraphic(this.props.currentMethod,graphic.width/2,graphic.height/2,0,graphic.width,x_interval,y_interval,this.props.data);
        for(let i=1; i<this.props.graphic.graphic.length;i++){
            ctx.moveTo(this.props.graphic.graphic[i-1].x,this.props.graphic.graphic[i-1].y);
            ctx.lineTo(this.props.graphic.graphic[i].x,this.props.graphic.graphic[i].y);
        }
    ctx.stroke();}
    }
    render(){
        return <canvas id={g.graph} height='600' width='600'>
        </canvas>;
    }
}
export default Graphic;