const CHANGE_METHOD='CHANGE_METHOD';
let initialState = {
    list_methods: [
        {type: 'none', text: '(не выбрано)'},
        {type: 'newton', text: 'Ньютона'},
        {type: 'Lagrangh', text: 'Лагранжа'}
    ],
    current_method: '(не выбрано)'
};
const methodReducer = (state=initialState, action)=>{
    switch(action.type){
        case CHANGE_METHOD:
            return {
                ...state,
                current_method: action.method
            };
        default: return state;
    }
};
export const changeMethodAC = (method) => ({type: CHANGE_METHOD, method});
export default methodReducer;
