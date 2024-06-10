import React from "react";
import ReactDOM from "react-dom/client"; //correction de l'erreur de la console navigateur

import Home from "./pages/Home";
import Survey from "./pages/Survey";
import Results from './pages/Results'
import Freelances from "./pages/Freelances";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Error from "./components/Error";
import Footer from "./components/Footer";

import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
    * {
      font-family: 'Trebuchet MS', Helvetica, sans-serif;
    }

    body 
    {
      margin: 0;
    }
`

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
      <GlobalStyle />
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/survey/:questionNumber" element={<Survey />} />
        <Route path="/results" element={<Results />} />
        <Route path="/freelances" element={<Freelances />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />

    </Router>
  </React.StrictMode>
);
