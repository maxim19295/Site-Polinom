import {combineReducers, createStore} from 'redux';
import coordinatesReducer from './coordinatesReducer.js';
import graphicReducer from './graphicReducer.js';
import methodReducer from './methodReducer.js';
let reducers = combineReducers({
    method: methodReducer,
    coordinates: coordinatesReducer,
    graphic: graphicReducer
});
let store = createStore(reducers);
window.state=store;
export default store;