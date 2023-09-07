import React from 'react';
import {
    BrowserRouter as Router,
    Routes,
    Route
} from 'react-router-dom';
import Header from "./components/Header/Header";
import Workplace from "./components/Workplace/Workplace";

export const App = () => (
    <Router>
        <Header/>
        <Routes>
            <Route exact path='/' element={<Workplace type_header='Step 1. Choosing method of approximation' type='method'/>}/>
            <Route exact path='/coords' element={<Workplace type_header='Step 2. Enter coordinates' type='coords'/>}/>
            <Route exact path='/graphic' element={<Workplace type_header='Step 3. Graphic building' type='graphic'/>}/>
        </Routes>
    </Router>
);
