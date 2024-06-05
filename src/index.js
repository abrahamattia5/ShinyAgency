import React from 'react';
import ReactDOM from 'react-dom';
import Home from './pages/Home';
import Survey from './pages/Survey';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/survey" element={<Survey />} />
      </Routes>
    </Router>
  </React.StrictMode>
);