import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './component/NavBar';
import Home from './pages/home';
import Shop from './pages/Shop';
import Details from './pages/Details';


function App() {

  return (
    <>
          <NavBar />

    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/products/:id" element={<Details />} />


     
      </Routes>
    </Router>
    </>
    
  );
}

export default App;
