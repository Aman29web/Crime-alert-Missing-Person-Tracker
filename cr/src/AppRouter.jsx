import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomeRouter from './pages/home/HomeRouter';
import AlertRouter from './pages/alert/AlertRouter';



const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomeRouter/>} />
        <Route path="/alert" element={<AlertRouter></AlertRouter>} />

       
      </Routes>
    </Router>
  );
};

export default AppRouter;
