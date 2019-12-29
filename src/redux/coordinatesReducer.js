const INPUT_NEW_COORDINATE = 'INPUT_NEW_COORDINATE';
const SAVE_COORDINATES = 'SAVE_COORDINATES';
let initialState = {
    point: [],
    newPoint: {newX: '',
    newY: ''}
};
const coordinatesReducer = (state=initialState, action)=>{
    switch(action.type){
        case INPUT_NEW_COORDINATE: {
            let newPointValue = (action.typeCoord==='X') ? {newX: action.newCoord, newY: state.newPoint.newY} : {newX: state.newPoint.newX, newY: action.newCoord};
            return {
                ...state,
                newPoint: newPointValue
            };
        };
        // eslint-disable-next-line no-lone-blocks
        case SAVE_COORDINATES: {
            return {
                ...state,
                point: [...state.point, {x: state.newPoint.newX, y: state.newPoint.newY}],
                newPoint: {
                    newX:'',
                    newY:''
                }
            };
        };
        default: return state;
    }
}
export const inputNewCoordAC = (newCoord, typeCoord) => ({type: INPUT_NEW_COORDINATE, typeCoord, newCoord});
export const addCoordAC = () => ({type: SAVE_COORDINATES});
export default coordinatesReducer;