import React from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Kitchen from '../src/Components/Kitchen/Kitchen.js'
import Home from './Components/Home/Home.js';
import Order from './Components/Order/Order.js'
import { ContextProvider } from './Components/Context/Context.js';
import './App.css';

function App() {
  return (
    <ContextProvider>
   <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home />}></Route>
      <Route path='/order' element={<Order />}></Route>
      <Route path='/kitchen' element={<Kitchen />}></Route>
    </Routes>
    
   </BrowserRouter>
   </ContextProvider> 
        
        
   
    
  );
}

export default App;
