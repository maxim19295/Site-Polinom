import React from 'react';
import Header from './components/Header/Header';
import Workplace from './components/Workplace/Workplace';
import './App.css';
import {BrowserRouter, Route} from 'react-router-dom';

function App(props) {
  return (
    <BrowserRouter>
      <Header />
      <Route exact path='/' render={()=><Workplace type_header='Step 1. Choosing method of approximation' type='method' needState={{method: props.state.method, methods: props.state.methods}} needFunctions={props.functions.methodFunctions}/>}/>
        <Route exact path='/coords' render={()=><Workplace type_header='Step 2. Enter coordinates' type='coords' needState={props.state.coordinates}/>}/>
      <Route exact path='/graphic' render={()=><Workplace type_header='Step 3. Graphic building' type='graphic'/>}/>
    </BrowserRouter>
  );
}

export default App;
