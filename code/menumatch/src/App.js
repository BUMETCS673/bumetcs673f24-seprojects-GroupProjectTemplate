import React from "react";
import GlobalStyles from './styles/GlobalStyles.js';
import { css } from "styled-components/macro"; //eslint-disable-line

import LandingPage from "./pages/LandingPage.js";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login.js";
import SignUp from "./pages/SignUp.js"
import AboutUs from "./pages/AboutUs.js"
import Map from "./pages/Map.js";

export default function App() {

  return (
    <>
      <GlobalStyles />
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/map" element={<Map />} />
        </Routes>
      </Router>
    </>
  );
}
