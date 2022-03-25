// import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom'
import './App.css';
import Home from './pages/Home'
function App() {
  return (
    <div className="App">
      <main>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='desserts' element={< Desserts />} />
          <Route path='dinner' element={< Dinner />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
