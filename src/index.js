import React from "react";
import ReactDOM from "react-dom/client"; //correction de l'erreur de la console navigateur

import Home from "./pages/Home";
import Survey from "./pages/Survey";
import Results from './pages/Results'
import Freelances from "./pages/Freelances";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Error from "./components/Error";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/survey/:questionNumber" element={<Survey />} />
        <Route path="/results" element={<Results />} />
        <Route path="/freelances" element={<Freelances />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </Router>
  </React.StrictMode>
);
