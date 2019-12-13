import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {state, functions} from './redux/store.js';
import {subscribe} from './redux/store.js';

let rerenderTree=(state)=>{return ReactDOM.render(<App state={state} functions={functions}/>, document.getElementById('root'));}
rerenderTree(state);
subscribe(()=>{rerenderTree(state)});
