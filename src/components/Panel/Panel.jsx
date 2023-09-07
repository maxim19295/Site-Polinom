import WP_Header from "../WP_Header/WP_Header";
import p from './Panel.module.css';
import MethodContainer from "../Workplace/Content/Method/MethodContainer";
import CoordinatesContainer from "../Workplace/Content/Coordinates/CoordinatesContainer";
import GraphicContainer from "../Workplace/Content/Graphic/GraphicContainer";

export const Panel = (props) =>{
    const number_step=props.state.number_step;
    let type_header, Content;
        Content=<div className={p.place}>
            <WP_Header type_header='Step 1. Choosing method of approximation'/>
            <MethodContainer changeStep={()=> {
                props.changeStep(2)
            }}/>
            {
                (number_step>=2 && <div className={p.place}>
                    <WP_Header type_header='Step 2. Enter coordinates'/>
                    <CoordinatesContainer changeStep={()=>{props.changeStep(3)}}/>
                </div>)
            }
            {
                (number_step>=3 && <div className={p.place}>
                    <WP_Header type_header='Step 3. Graphic building'/>
                    <GraphicContainer/>
                </div>)
            }
        </div>;
    /*switch (number_step){
        case 1:
            Content=<div className={p.place}>
                <WP_Header type_header='Step 1. Choosing method of approximation'/>
                <MethodContainer changeStep={()=> {
                    props.changeStep(2)
                }}/>
            </div>;
        break;
        case 2:
            Content=<div className={p.place}>
                <WP_Header type_header='Step 2. Enter coordinates'/>
                <CoordinatesContainer changeStep={()=>{props.changeStep(3)}}/>
            </div>;
        break;
        case 3:
            Content=<div className={p.place}>
                <WP_Header type_header='Step 3. Graphic building'/>
                <GraphicContainer/>
            </div>;
        break;
        default: {}    }*/
    console.log(props)
    return <div>
        {Content}
    </div>
}