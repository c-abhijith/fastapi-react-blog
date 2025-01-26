import React from 'react'
import { Routes, Route } from 'react-router-dom';
import LandingPage from '../pages/LandingPage/LandingPage';
import { Login } from '../pages/Auth/Login';
import { Signup } from '../pages/Auth/Signup';

export const AppRoutes = () => {
  return (
    <Routes>
        <Route path="/" element={<LandingPage/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/signup" element={<Signup/>}/>

    </Routes>
  )
}
