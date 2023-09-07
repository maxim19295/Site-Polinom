const CHANGE_STEP='CHANGE_STEP';
let initialState = {
    number_step: 1
}
const stepReducer = (state=initialState, action) =>{
    switch (action.type){
        case CHANGE_STEP: return {
            ...state, number_step: action.number_step
        };
        default: return state;
    }
}
export const changeStepAC = (number_step) => ({
    type: CHANGE_STEP, number_step
})
export default stepReducer;