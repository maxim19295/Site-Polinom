import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {App} from './App';
import {Provider} from 'react-redux';
import store from './redux/redux-store.js';

let rerenderTree=(store)=>{
    return ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));}
rerenderTree(store);
store.subscribe(()=>{rerenderTree(store)});
