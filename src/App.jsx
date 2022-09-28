import React from 'react';
import './styles/app.scss';
import { Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import Register from './pages/Register';
import Header from './pages/Header';

function App() {
  return (
    <div className="app">
      <Routes>
        <Route index path='/' element={<Header />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
      </Routes>
    </div>
  )
}

export default App