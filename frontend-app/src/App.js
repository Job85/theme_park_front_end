// import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom'
import './App.css';
import Header from './components/Header';
import Home from './pages/Home';
import Desserts from './pages/Desserts';
import Dinner from './pages/Dinner';

const App = () => {
  return (
    <div className='Header'>
      <Header />
      <main>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='desserts' element={< Desserts />} />
          <Route path='dinner' element={< Dinner />} />
        </Routes>
      </main>
    </div>
  )
}

export default App;
