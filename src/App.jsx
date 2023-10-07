import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './component/NavBar';
import Home from './pages/home';


function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
     
      </Routes>
    </Router>
  );
}

export default App;
