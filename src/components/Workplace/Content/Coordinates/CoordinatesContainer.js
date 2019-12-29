import Coordinates from './Coordinates.js';
import {inputNewCoordAC, addCoordAC} from './../../../../redux/coordinatesReducer';
import {connect} from 'react-redux';
let MapStateToProps = (state) => {
    return {coordinates: state.coordinates};
}
let MapDispatchToProps = (dispatch) =>{
    return {
        inputNewCoord: (newCoord, typeCoord) =>{
            dispatch(inputNewCoordAC(newCoord, typeCoord));
        },
        saveCoords: () =>{
            dispatch(addCoordAC());
        }
    }
}
const CoordinatesContainer = connect(MapStateToProps,MapDispatchToProps)(Coordinates);
export default CoordinatesContainer;