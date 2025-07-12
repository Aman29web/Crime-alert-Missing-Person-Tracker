import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomeRouter from './pages/home/HomeRouter';



const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomeRouter/>} />
       
      </Routes>
    </Router>
  );
};

export default AppRouter;
