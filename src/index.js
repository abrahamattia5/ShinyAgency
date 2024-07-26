import React from "react";
import ReactDOM from "react-dom/client"; //correction de l'erreur de la console navigateur

import Home from "./pages/Home";
import Survey from "./pages/Survey";
import Results from './pages/Results'
import Freelances from "./pages/Freelances";
import Profile from "./pages/Profile";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Error from "./components/Error";
import Footer from "./components/Footer";

import GlobalStyle from './utils/style/GlobalStyle'
import { ThemeProvider, SurveyProvider } from './utils/context'

import MentionsLegales from "./pages/MentionsLegales";
import PolitiqueDeConfidentialite from "./pages/PolitiqueDeConfidentialite";
import ConditionsUtilisation from "./pages/ConditionsUtilisation";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
      <ThemeProvider>
        <SurveyProvider>
          <GlobalStyle />
          <Header />

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/survey/:questionNumber" element={<Survey />} />
            <Route path="/results" element={<Results />} />
            <Route path="/freelances" element={<Freelances />} />
            <Route path="/profile/:id" element={<Profile />} />
            <Route path="/mentions-legales" element={<MentionsLegales />} />
            <Route path="/politique-de-confidentialite" element={<PolitiqueDeConfidentialite />} />
            <Route path="/conditions-utilisation" element={<ConditionsUtilisation />} />
            <Route path="*" element={<Error />} />
          </Routes>
          <Footer />
        </SurveyProvider>
      </ThemeProvider>

    </Router>
  </React.StrictMode>
);
