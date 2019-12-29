import Graphic from './Graphic';
import {buildingGraphicAC} from './../../../../redux/graphicReducer';
import {connect} from 'react-redux';
let MapStateToProps = (state) => (
    {graphic: state.graphic,
        currentMethod: state.method.current_method,
         data: state.coordinates.point});
let MapDispatchToProps=(dispatch)=>{
    return {buildGraphic: (method,startX,startY,min,max,scaleX,scaleY,data) => {
        dispatch(buildingGraphicAC(method,startX,startY,min,max,scaleX,scaleY,data));
    }}
}
const GraphicContainer = connect(MapStateToProps,MapDispatchToProps)(Graphic);
export default GraphicContainer;