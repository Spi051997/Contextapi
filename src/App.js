import "./App.css";
import Nav from "./Nav";
import Home from "./Home";
import Cart from "./Cart";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import React, { useState } from 'react'

function App() {
  // const [cart,setcart]=useState([]);
  return (
  
    <div className="App">
      <Nav />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
 
    </div>
  );
}

export default App;
