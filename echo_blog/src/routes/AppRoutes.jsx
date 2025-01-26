import React from 'react'
import { Routes, Route } from 'react-router-dom';
import LandingPage from '../pages/landingpages/LandingPage';

export const AppRoutes = () => {
  return (
    <Routes>
        <Route path="/" element={<LandingPage/>}/>
    </Routes>
  )
}
