import Method from './Method';
import {changeMethodAC} from './../../../../redux/methodReducer';
import {connect} from 'react-redux';
let MapStateToProps = (state) => {
    return {state: state.method};
}
let MapDispatchToProps = (dispatch) => {
    return {
        changeMethod: (method)=>{
            dispatch(changeMethodAC(method));
        }
    }
}
const MethodContainer = connect(MapStateToProps,MapDispatchToProps)(Method);
export default MethodContainer;