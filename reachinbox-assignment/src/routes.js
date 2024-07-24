import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import OneboxPage from './pages/OneboxPage';

const RoutesComponent = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<LoginPage />} />
        <Route path="/onebox" element={<OneboxPage />} />
      </Routes>
    </Router>
  );
};

export default RoutesComponent;
