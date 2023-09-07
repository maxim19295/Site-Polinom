import {changeStepAC} from "../../redux/stepReducer";
import {connect} from "react-redux";
import {Panel} from "./Panel";

let MapStateToProps = (state) => ({
    state: state.step
});
let MapDispatchToProps = (dispatch)=>{
    return {changeStep: (number_step)=>
    {
        dispatch(changeStepAC(number_step));
    }
    }
}
export const PanelContainer = connect(MapStateToProps,MapDispatchToProps)(Panel);